import { GET_RECIPE, DELETE_RECIPE } from "../actions/types";
import model from "../model/index";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_RECIPE:                        
            let recipe = state;
            console.log("Firing get recipe for ID: " + action.id);
            console.log("my state is:");
            console.log(recipe);

            //get recipe from model
            recipe = model.filter( recipe => recipe.id === action.id );
            
            // console.log(recipe);
            if(recipe.length > 0){
                return recipe[0];
            } 
            
            return recipe;
            // return recipe;
        case DELETE_RECIPE:
            let emptyState = {};
            console.log("Recipe state should be empty");
            console.log(emptyState);
            return emptyState;    
        default:
            return state;
    }

}