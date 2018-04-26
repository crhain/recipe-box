import { GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import model from "../model/index";

export default (state = null, action) => {
    switch (action.type) {
        case GET_RECIPE:            
            let recipe = model.filter( recipe => recipe.id === action.id );
            if(recipe.length > 0){
                return recipe[0];
            } else {
                return null;
            }                                          
        default:
            return state;
    }

}