import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import { model } from "../model/index.js";
import Model from "../model/index";


export default (state = [], action) => {
    let exists;
    switch (action.type) {
        case GET_RECIPES:
            if(state.length < 1){
                return Model.getAllRecipes();      
            }            
            return state;
        //action contains **recipe** to be added                                              
        case ADD_RECIPE:            
                        
            let added = Model.addRecipe(action.recipe);
            if(added.error){
                return state;
            }
            
            action.history.push("/");
            return added;

        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:
            // exists = state.find( recipe => {
            //     return recipe.id === action.recipe.id;
            // });

            
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




