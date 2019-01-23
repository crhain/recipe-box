// @ts-check
import seed from 'model/seed.js';
import { RecipeLimitReached, RecipeDoesNotExist } from 'model/error.js';

let MAX_RECIPES = 50;
let testMode = false;
let Model = {};
let recipesInitialized = false;

/**@type {Array.<Recipe>} recipes */
let recipes = [];

/***********************************************************
 ***********************************************************    
   PRIVATE FUNCTIONS
************************************************************
************************************************************/

/**
 * @description Returns ID for new recipes - uses random string + system data to generate unique ID
 * @return {String}
 */
const getRecipeID = function() {
  return (
    Date.now().toString() +
    '_' +
    Math.random()
      .toString(32)
      .slice(2, 9)
  );
};

/**
 * @description Function to retireve recipes state from localstorage and convert to appropriate format for
 * in memory storage
 * @return {Array.<Recipe>}
 */
const getRecipesFromStorage = function() {
  // return seed;
  let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
  return storedRecipes ? storedRecipes : [];
};

/**
 * @description populates premade recipes to storage if storage is empty
 * @return {void}
 */
const populateSeedDataToStorage = function() {
  let retrievedRecipes = getRecipesFromStorage();
  if (retrievedRecipes.length < 1) {
    console.log('adding recipes...');
    localStorage.setItem('recipes', JSON.stringify(seed));
  }
};

/**
 * @description Function that checks to see if recipes state should be retrieved from localstorage or not
 * @return {Boolean}
 */
const shouldGetRecipesFromStorage = function() {
  return recipes.length <= 0 && !testMode;
};

/**
 * @description Function to check if recipes state should be added to localstorage
 * @return {Boolean}
 */
const shouldAddRecipesToStorage = function() {
  return !testMode;
};

/**
 * @description function to retrieve recipes from localstorage
 * @return {void}
 */
const refreshRecipes = function() {
  if (shouldGetRecipesFromStorage()) {
    recipes = getRecipesFromStorage();
  }
};

/**
 * @description function to add recipes to localstorage in appropriate format
 * @return {void}
 */
const addRecipesToStorage = function() {
  if (shouldAddRecipesToStorage()) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
};

/**
 * @description function to clear local storage
 * @return {void}
 */
function clearStorage() {
  localStorage.removeItem('recipes');
}

/**
 * @description function retrieves recipes from local storage
 * or in memory model depending on current state. Runs at start of application
 * @return {void}
 */
function initialize() {
  recipesInitialized = !!localStorage.getItem('recipesInitialized');
  if (!testMode && !recipesInitialized) {
    populateSeedDataToStorage();
    localStorage.setItem('recipesInitialized', 'true');
  }
}

/***********************************************************
 ***********************************************************    
   PUBLIC FUNCTIONS
************************************************************
************************************************************/

/**
 * @description Toggles Test Mode
 * @param {Boolean} state = value representing testing mode on/off
 * @return {void}
 */
Model.toggleTestMode = function(state) {
  testMode = state;
  if (testMode) {
    recipes = seed;
  } else {
    recipes = [];
  }
};

/**
 * @description Sets Max Recipes that can be stored on client
 * @param {Number} max - integer represeing total number of recipes
 * that can be stored
 * @return {void}
 */
Model.setMaxRecipes = function(max) {
  MAX_RECIPES = max;
};

/**
 * @description retrieve all recipes from storage or memory
 * @return {Array.<Recipe>} an array of recipes
 */
Model.getAllRecipes = function() {
  if (shouldGetRecipesFromStorage()) {
    initialize();
    recipes = getRecipesFromStorage();
  }

  return recipes;
};

/**
 * @description add a recipe to the model
 * @param {Recipe} recipe - object to be stored
 * @return {Array.<Recipe>} of updated recipes
 */
Model.addRecipe = function(recipe) {
  refreshRecipes();

  recipe.id = getRecipeID();
  //push recipe to recipes
  if (recipes.length < MAX_RECIPES) {
    recipes.push(recipe);
    addRecipesToStorage();
  } else {
    throw new RecipeLimitReached();
  }

  return recipes;
};

/**
 * @description edit a recipe
 * @param {Recipe} recipe - an edited version of a recipe
 * @return {Array.<Recipe>} of updated recipes
 */
Model.editRecipe = function(recipe) {
  //if recipes length is less than one, it may mean that we need to get them from localstorage
  refreshRecipes();

  //find recipe in recipes -NOTE: typescript is not yet aware of Array.prototype.findIndex
  let matchPosition = recipes.findIndex(
    matchingRecipe => matchingRecipe.id === recipe.id
  );
  if (matchPosition === -1) {
    throw new RecipeDoesNotExist();
  }

  recipes[matchPosition] = recipe;

  addRecipesToStorage();

  return recipes;
};

/**
 * @description retrieve a specific recipe by its unique ID
 * @param {String} id - of recipe to be retrieved
 * @return {Recipe} a single recipe
 */
Model.getRecipeById = function(id) {
  refreshRecipes();
  let recipe = recipes.filter(recipe => recipe.id === id);

  if (recipe.length < 1) {
    throw new RecipeDoesNotExist();
  }

  return recipe[0];
};

/**
 * @description delete a recipe with a given id
 * @param {String} id - for recipe to be deleted
 * @return {Array.<Recipe>} of updated recipes
 */
Model.deleteRecipeById = function(id) {
  //if recipes length is less than one, it may mean that we need to get them from localstorage
  refreshRecipes();
  let matchPosition = recipes.findIndex(recipe => recipe.id === id);
  if (matchPosition === -1) {
    throw new RecipeDoesNotExist();
  }

  //splice it out
  recipes.splice(matchPosition, 1);

  addRecipesToStorage();

  return recipes;
};

export default Model;
