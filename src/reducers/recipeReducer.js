import { GET_RECIPE, DELETE_RECIPE } from "../actions/types";
import { model } from "../model/index";
import Model from "../model/index";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_RECIPE:                                                
            let recipe = Model.getRecipeById(action.id);                                                
            return recipe;
            // return recipe;
        case DELETE_RECIPE:
            let emptyState = {};
            // console.log("Recipe state should be empty");
            // console.log(emptyState);
            return emptyState;    
        default:
            return state;
    }

}