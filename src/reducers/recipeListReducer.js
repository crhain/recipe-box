import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import { model } from "../model/index.js";
import Model from "../model/index";

function getRecipeId(title){
    //convert to lower case
    let value = title
        .toLowerCase()
        .split("")
        .filter( letter => letter !== " ")
        .join("");
    
    return value;
}

function getRecipeIngredients(ingredients){
    
    let value = ingredients.split("\n");
    console.log("My list of ingredients is:");
    console.log(value);
                    
    return value;
}


export default (state = [], action) => {
    let exists;
    let recipe = {};
    switch (action.type) {
        case GET_RECIPES:
            if(state.length < 1){
                return Model.getAllRecipes();      
            }            
            return state;
        //action contains **recipe** to be added                                              
        case ADD_RECIPE:                   
            recipe.title = action.recipe.title;
            recipe.servings = action.recipe.servings;
            recipe.id = getRecipeId(action.recipe.title);
            recipe.ingredients = getRecipeIngredients(action.recipe.ingredients);
                         
            let added = Model.addRecipe(recipe);
            if(added.error){
                return state;
            }
            action.history.push("/");
            return added;

        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:
                                                
            let edited = Model.editRecipe(action.recipe);
            if(edited.error){
                return state;
            }
            
            return edited;

        //action continas the **id** of a recipe to be deleted    
        case DELETE_RECIPE:
            // exists = state.find( recipe => {
            //     return recipe.id === action.id;
            // });
                        
            let deleted = Model.deleteRecipeById(action.id);
                        
            if(deleted.error){
                return state;        
            }            
            action.history.push("/");
            return deleted;
        default:
            return state;
    }
    
}




