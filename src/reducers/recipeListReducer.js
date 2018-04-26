import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import model from "../model/index.js";


export default (state = [], action) => {
    let exists;
    switch (action.type) {

        case GET_RECIPES:            
            return model;

        //action contains **recipe** to be added                                              
        case ADD_RECIPE:            
            exists = state.find( recipe => {
                return recipe.id === action.recipe.id;
            });
            
            if(exists){
                return state;
            } 
            
            return state.concat([action.recipe]);

        //action contains **recipe** to be updated                           
        case EDIT_RECIPE:
            exists = state.find( recipe => {
                return recipe.id === action.recipe.id;
            });

            if(exists){
                return state.map( recipe => {
                    if(recipe.id === action.recipe.id){
                        return action.recipe;
                    }

                    return recipe;
                });
            }

            return state;

        //action continas the **id** of a recipe to be deleted    
        case DELETE_RECIPE:
            exists = state.find( recipe => {
                return recipe.id === action.id;
            });

            if(exists){
                
                return state.filter( recipe => recipe.id != action.id );
                
            }

            return state;        

        default:
            return state;
    }
    
}




