import { store } from 'components/Root';
import { flashMessage } from 'redux-flash';
import {  RecipeLimitReached, DuplicateRecipe, RecipeDoesNotExist } from "model/error.js";
import model from "model/index";
import { 
    GET_RECIPES, 
    GET_RECIPE, 
    ADD_RECIPE, 
    EDIT_RECIPE, 
    DELETE_RECIPE, 
    SET_RECIPE_TO_DELETE } from "actions/types";

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
    //TODO: The big one... move logic adding a new recipe from recipeListReducer here
    //   and also move logic for triggering flash message here
    return { type: ADD_RECIPE, payload: { recipe }, history };
}

export const editRecipe = ( recipe, history ) => {             
    let payload = model.editRecipe(recipe);
    store.dispatch(flashMessage("Recipe succesfully edited!"));                    
    history.push("/");    
    return { type: EDIT_RECIPE, payload };
}

export const deleteRecipe = ( id, history ) => {   
    let payload = [];    
    try{
        payload = model.deleteRecipeById(id);
        store.dispatch(flashMessage("Recipe succesfully deleted!"));                
        history.push("/");     
    } catch(error){
        if(error instanceof RecipeDoesNotExist){            
            store.dispatch(flashMessage(error.message));
            payload = model.getAllRecipes();                            
        }
    }
                                                                        
    return { type: DELETE_RECIPE, payload };
}

export const setRecipeToDelete = ( id ) => {    
    return { type: SET_RECIPE_TO_DELETE, payload: { id } };
}


