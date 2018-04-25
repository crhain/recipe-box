import recipeListReducer from "./recipeListReducer";
import { GET_RECIPES } from "../actions/types";
import model from "../model/";

describe("recipeListReducer", () => {
    it("Should return initial state of null when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null})).toEqual(null);
    });

    
    it("Should return the correct state when called with GET_RECIPES action type", () => {
        expect(recipeListReducer(null, {type: GET_RECIPES, model})).toMatchObject(model);
    });
    
});
