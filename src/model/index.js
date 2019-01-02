// @nots-check
import seed from 'model/seed.js';
import { RecipeLimitReached, RecipeDoesNotExist } from 'model/error.js';

let MAX_RECIPES = 50;

let recipes = [];
let testMode = false;
let Model = {};
let recipesInitialized = false;

/***********************************************************
 ***********************************************************    
   PRIVATE FUNCTIONS
************************************************************
************************************************************/

// Returns ID for new recipes - uses random string + system data to generate unique ID
const getRecipeID = function() {
  return (
    Date.now().toString() +
    '_' +
    Math.random()
      .toString(32)
      .slice(2, 9)
  );
};

/*
Function to retireve recipes state from localstorage and convert to appropriate format for
 in memory storage
*/
const getRecipesFromStorage = function() {
  // return seed;
  let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
  return storedRecipes ? storedRecipes : [];
};

/*
  populates premade recipes to storage if storage is empty
*/
const populateSeedDataToStorage = function() {
  let retrievedRecipes = getRecipesFromStorage();
  if (retrievedRecipes.length < 1) {
    console.log('adding recipes...');
    localStorage.setItem('recipes', JSON.stringify(seed));
  }
};

//Function that checks to see if recipes state should be retrieved from localstorage or not
const shouldGetRecipesFromStorage = function() {
  return recipes.length <= 0 && !testMode;
};

//Function to check if recipes state should be added to localstorage
const shouldAddRecipesToStorage = function() {
  return !testMode;
};

const refreshRecipes = function() {
  if (shouldGetRecipesFromStorage()) {
    recipes = getRecipesFromStorage();
  }
};

//Function to add recipes to localstorage in appropriate format
const addRecipesToStorage = function() {
  if (shouldAddRecipesToStorage()) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
};

//Function to clear local storage
function clearStorage() {
  localStorage.removeItem('recipes');
}

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

/***********************************************************
  Toggles Test Mode
   state = boolean value to switch test mode on/off
************************************************************/
Model.toggleTestMode = function(state) {
  testMode = state;
  if (testMode) {
    recipes = seed;
  } else {
    recipes = [];
  }
};

/***********************************************************
  Sets Max Recipes that can be stored on client
   max = integer representing total number of recipes that 
     can be stored.
************************************************************/
Model.setMaxRecipes = function(max) {
  MAX_RECIPES = max;
};

/***********************************************************
   Retrieve all recipes    
************************************************************/
Model.getAllRecipes = function() {
  if (shouldGetRecipesFromStorage()) {
    initialize();
    recipes = getRecipesFromStorage();
  }

  return recipes;
};

/***********************************************************
   Add a recipe
    recipe = recipe object to be stored   
************************************************************/
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

/***********************************************************
   Edit a recipe
     recipe = recipe object to overwrite existing recipe    
************************************************************/
Model.editRecipe = function(recipe) {
  //if recipes length is less than one, it may mean that we need to get them from localstorage
  refreshRecipes();

  //find recipe in recipes
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

/***********************************************************
   Retrieve a specific recipe by its unique ID
     id = string representing the recipe's id   
************************************************************/
Model.getRecipeById = function(id) {
  refreshRecipes();
  let recipe = recipes.filter(recipe => recipe.id === id);

  if (recipe.length < 1) {
    throw new RecipeDoesNotExist();
  }

  return recipe[0];
};

/***********************************************************
   Delete a recipe with a given id
     id = string representing the recipe's id    
************************************************************/
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
