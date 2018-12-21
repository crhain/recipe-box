import recipeListReducer from "reducers/recipeListReducer";
import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import seed from 'model/seed';

Model.toggleTestMode(true);

describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });
    
    it("Should return a list of recipes passed as a payload", () => {
        expect(recipeListReducer(undefined, {type: GET_RECIPES, payload: seed})).toMatchObject(seed);
        expect(recipeListReducer(undefined, {type: ADD_RECIPE, payload: seed})).toMatchObject(seed);
        expect(recipeListReducer(undefined, {type: EDIT_RECIPE, payload: seed})).toMatchObject(seed);
        expect(recipeListReducer(undefined, {type: DELETE_RECIPE, payload: seed})).toMatchObject(seed);        
    });    
});
