import { GET_RECIPE } from "actions/types";
import {  RecipeDoesNotExist } from "model/error.js";
import Model from "model/index";

export default (state = {}, action, model = Model) => {
    let newState = state;

    switch (action.type) {
        case GET_RECIPE:
            try{
                newState = model.getRecipeById(action.payload.id);                                                        
            } catch(error){
                if(error instanceof RecipeDoesNotExist){
                    throw new RecipeDoesNotExist();
                }
                console.log(error);
            }                                                           
            return newState;     
        default:
            return newState;
    }

}