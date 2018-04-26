import { GET_RECIPES, GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./types";
import model from "../model/"

export const getRecipes = () => {
    return { type: GET_RECIPES, payload: null };
}

export const getRecipe = ( recipeID ) => {
    return { type: GET_RECIPE, recipeID };
}

export const addRecipe = ( recipe ) => {
    return { type: ADD_RECIPE, recipe };
}

export const editRecipe = ( recipe ) => {
    return { type: EDIT_RECIPE, recipe };
}

export const deleteRecipe = ( recipeID) => {
    return { type: DELETE_RECIPE, recipeID };
}