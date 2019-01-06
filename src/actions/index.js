// @nots-check
import { store } from 'components/Root';
import { flashMessage } from 'redux-flash';
import { RecipeDoesNotExist } from 'model/error.js';
import Model from 'model/index';
import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  SET_RECIPE_TO_DELETE
} from 'actions/types';

/************************************************************************************ 
 getRecipes - action to retrieve all recipes from Model
  model = model used to retrieve recipes. Defaults to Model
*************************************************************************************/
export const getRecipes = function(model = Model) {
  const payload = model.getAllRecipes();
  return { type: GET_RECIPES, payload };
};

/************************************************************************************ 
 getRecipe - action to retrieve a single recipe from Model
  id = string id for recipe
  model = model used to retrieve recipes. Defaults to Model
*************************************************************************************/
export const getRecipe = function(id, model = Model) {
  let payload = {};
  try {
    payload = model.getRecipeById(id);
  } catch (error) {
    if (error instanceof RecipeDoesNotExist) {
      console.log(error.message);
    }
  }
  return { type: GET_RECIPE, payload };
};

/************************************************************************************ 
 addRecipe - action to add a recipe to Model
  recipe = recipe object to be added
  history = history object used by react router
  model = model used to retrieve recipes. Defaults to Model
*************************************************************************************/
export const addRecipe = function(recipe, history, model = Model) {
  let payload = {};

  try {
    payload = model.addRecipe(recipe);
    store.dispatch(flashMessage('Successfully added a new recipe!'));
    history.push('/');
  } catch (error) {
    if (error.name === 'DuplicateRecipe') {
      store.dispatch(flashMessage(error.message));
    } else if (error.name === 'RecipeLimitReached') {
      store.dispatch(flashMessage(error.message));
    } else {
      throw new Error(error.message);
    }
  }

  return { type: ADD_RECIPE, payload };
};

/************************************************************************************ 
 ediRecipe - action to replace old recipe with new version
  recipe = recipe object to replace old recipe with
  history = history object used by react router
  model = model used to retrieve recipes. Defaults to Model
*************************************************************************************/
export const editRecipe = function(recipe, history, model = Model) {
  let payload = model.editRecipe(recipe);
  store.dispatch(flashMessage('Recipe succesfully edited!'));
  history.push('/');
  return { type: EDIT_RECIPE, payload };
};

/************************************************************************************ 
 deleteRecipe - action to delete recipe by id from Model
  id = string id for recipe
  history = history object used by react router
  model = model used to retrieve recipes. Defaults to Model
*************************************************************************************/
export const deleteRecipe = function(id, history, model = Model) {
  let payload = [];
  try {
    payload = model.deleteRecipeById(id);
    store.dispatch(flashMessage('Recipe succesfully deleted!'));
    history.push('/');
  } catch (error) {
    if (error instanceof RecipeDoesNotExist) {
      store.dispatch(flashMessage(error.message));
      payload = model.getAllRecipes();
    }
  }

  return { type: DELETE_RECIPE, payload };
};

/************************************************************************************ 
 setRecipeToDelete - action used with delete confirmation modal window
  id = string id for recipe
*************************************************************************************/
export const setRecipeToDelete = function(id) {
  return { type: SET_RECIPE_TO_DELETE, payload: { id } };
};
