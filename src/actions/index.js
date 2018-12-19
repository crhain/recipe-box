import {  RecipeLimitReached, DuplicateRecipe, RecipeDoesNotExist } from "model/error.js";
import model from "model/index";
import { 
    GET_RECIPES, 
    GET_RECIPE, 
    ADD_RECIPE, 
    EDIT_RECIPE, 
    DELETE_RECIPE, 
    SET_RECIPE_TO_DELETE, 
    SET_MESSAGE_DISPLAY } from "actions/types";

export const setMessageDisplay = ( message ) => {
    return { type: SET_MESSAGE_DISPLAY, payload: { message }}
}

export const getRecipes = () => {            
    const payload = model.getAllRecipes();             
    return { type: GET_RECIPES, payload };
}

export const getRecipe = ( id ) => {
    let payload = {};
    try{
        payload = model.getRecipeById(id);                                                        
    } catch(error){
        if(error instanceof RecipeDoesNotExist){            
            console.log(error.message);
        }        
    }      
    return { type: GET_RECIPE, payload };
}

export const addRecipe = ( recipe, history ) => {
    return { type: ADD_RECIPE, payload: { recipe }, history };
}

export const editRecipe = ( recipe, history ) => {             
    let payload = model.editRecipe(recipe);                
    history.push("/");
    return { type: EDIT_RECIPE, payload };
}

export const deleteRecipe = ( id, history ) => {   
    let payload = [];

    try{
        payload = model.deleteRecipeById(id);
        history.push("/");     
    } catch(error){
        if(error instanceof RecipeDoesNotExist){
            //TODO: if recipe does not exist, we need to just return existing
            // state by calling getRecipes() and assigning to payload variable
            // then flash a message. 
            console.log(error.message);
        }
    }
                                                                        
    return { type: DELETE_RECIPE, payload };
}

export const setRecipeToDelete = ( id ) => {    
    return { type: SET_RECIPE_TO_DELETE, payload: { id } };
}


