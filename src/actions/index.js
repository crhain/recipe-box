import { GET_RECIPES, GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./types";
import model from "../model/"

// Core actions for application
//  getRecipies => retrieves full list of recipies from localStorage (or in memory cache)
//  getRecipie => retrieves recipie from localstorage (or in memory cache) 
//  createRecipie =>  adds recipie to browser localStorage, switches to RecipieList, and then updates list
//  updateRecipie => updates recipie in browser localStorage, switches to REcipieList, and then updates list

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