import { GET_RECIPES } from "../actions/types";
import model from "../model/index.js";


export default (state = null, action) => {
    if(action.type === GET_RECIPES) {
        return model;
    } else {
        return state;
    } 
}

