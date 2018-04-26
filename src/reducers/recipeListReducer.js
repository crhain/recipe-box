import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import model from "../model/index.js";

export default (state = null, action) => {
    switch (action.type) {
        case GET_RECIPES:            
            return model;                              
        case ADD_RECIPE:
            return state;
        case EDIT_RECIPE:
            return state;
        case DELETE_RECIPE:
            return state;        
        default:
            return state;
    }
    
}




