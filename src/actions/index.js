import { GET_RECIPES, GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./types";
import model from "../model/"

export const getRecipes = () => {
    return {type: GET_RECIPES, model}
}

export const getRecipe = ( recipeID ) => {
    return null;
}

export const addRecipe = ( recipe ) => {
    return null;
}

export const editRecipe = ( recipe ) => {
    return null;
}

export const deleteRecipe = ( recipeID) => {
    return null;
}