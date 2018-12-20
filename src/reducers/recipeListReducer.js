import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import {  RecipeLimitReached, DuplicateRecipe, RecipeDoesNotExist } from "model/error.js";
import Model from "model/index";


export default (state = [], action, model = Model) => {    
    let recipe = {};
    let newState = state;
    switch (action.type) {
        case GET_RECIPES:                    
            return action.payload;
        //action contains **recipe** to be added                                              
        case ADD_RECIPE:                               
            return action.payload;
        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:            
            return action.payload;
        //action continas the **id** of a recipe to be deleted    
        case DELETE_RECIPE:                        
            return action.payload;
        default:
            return newState;
    }
    
}




