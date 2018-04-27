import { GET_RECIPE } from "../actions/types";
import model from "../model/index";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_RECIPE:            
            // console.log("My action id is: " + action.id);
            let recipe = model.filter( recipe => recipe.id === action.id );
            // console.log(recipe);
            if(recipe.length > 0){
                return recipe[0];
            } 
            
            return state;
            // return recipe;
        default:
            return state;
    }

}