import { GET_RECIPE, DELETE_RECIPE } from "actions/types";
import { model } from "model/index";
import Model from "model/index";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_RECIPE:                                                
            let recipe = Model.getRecipeById(action.id);                                                
            return recipe;
            // return recipe;        
        default:
            return state;
    }

}