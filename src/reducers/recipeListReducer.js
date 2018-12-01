import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import Model from "model/index";

export default (state = [], action, model = Model) => {    
    let recipe = {};
    switch (action.type) {
        case GET_RECIPES:
            if(state.length < 1){
                return model.getAllRecipes();      
            }            
            return state;
        //action contains **recipe** to be added                                              
        case ADD_RECIPE:                   
            recipe.title = action.recipe.title;
            recipe.description = action.recipe.description;
            recipe.image = action.recipe.image;
            recipe.servings = action.recipe.servings;            
            recipe.ingredients = action.recipe.ingredients;
            recipe.instructions = action.recipe.instructions;
                         
            model.addRecipe(recipe);
            
            action.history.push("/");
            return state;

        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:
            recipe.title = action.recipe.title;
            recipe.description = action.recipe.description;
            recipe.image = action.recipe.image;
            recipe.servings = action.recipe.servings;
            recipe.id = action.recipe.id;
            recipe.ingredients = action.recipe.ingredients;
            recipe.instructions = action.recipe.instructions;
            
            model.editRecipe(recipe);
                        
            action.history.push("/");
            return state;

        //action continas the **id** of a recipe to be deleted    
        case DELETE_RECIPE:
            // exists = state.find( recipe => {
            //     return recipe.id === action.id;
            // });               
            model.deleteRecipeById(action.id);
                                        
            action.history.push("/");
            return state;
        default:
            return state;
    }
    
}




