import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import {  RecipeLimitReached, DuplicateRecipe, RecipeDoesNotExist } from "model/error.js";
import Model from "model/index";

export default (state = [], action, model = Model) => {    
    let recipe = {};
    let newState = state;
    switch (action.type) {
        case GET_RECIPES:
            if(newState.length < 1){
                newState = model.getAllRecipes();      
            }            
            return newState;
        //action contains **recipe** to be added                                              
        case ADD_RECIPE:                   
            recipe.title = action.payload.recipe.title;
            recipe.description = action.payload.recipe.description;
            recipe.image = action.payload.recipe.image;
            recipe.servings = action.payload.recipe.servings;            
            recipe.ingredients = action.payload.recipe.ingredients;
            recipe.instructions = action.payload.recipe.instructions;
                         
            try {
                newState = model.addRecipe(recipe);
            }
            catch(error){
                if(error instanceof DuplicateRecipe){
                    throw new DuplicateRecipe();
                }

                if(error instanceof RecipeLimitReached){
                    throw new RecipeLimitReached();
                }

                console.log(error);
            }
                        
            action.history.push("/");
            return newState;

        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:
            recipe.title = action.payload.recipe.title;
            recipe.description = action.payload.recipe.description;
            recipe.image = action.payload.recipe.image;
            recipe.servings = action.payload.recipe.servings;
            recipe.id = action.payload.recipe.id;
            recipe.ingredients = action.payload.recipe.ingredients;
            recipe.instructions = action.payload.recipe.instructions;
            
            state = model.editRecipe(recipe);
                        
            action.history.push("/");
            return state;

        //action continas the **id** of a recipe to be deleted    
        case DELETE_RECIPE:            
            try{
                newState = model.deleteRecipeById(action.payload.id);
            } catch(error){
                if(error instanceof RecipeDoesNotExist){
                    throw new RecipeDoesNotExist();
                }
            }
                                                                            
            action.history.push("/");
            return newState;
        default:
            return state;
    }
    
}




