import { GET_RECIPES } from "../actions/types";
import model from "../model/index.js";

const initialState = {
    recipes: []
};

export default function (state = initialState, action) {
    if(action.type === GET_RECIPES) {
        return action.model;
    } else {
        return state;
    }
                
}

