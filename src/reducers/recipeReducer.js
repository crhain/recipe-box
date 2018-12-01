import { GET_RECIPE } from "actions/types";
import Model from "model/index";

export default (state = {}, action, model = Model) => {
    switch (action.type) {
        case GET_RECIPE:                                                
            let recipe = model.getRecipeById(action.id);                                                        
            return recipe;     
        default:
            return state;
    }

}