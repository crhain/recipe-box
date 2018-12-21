import recipeReducer from "reducers/recipeReducer";
import { GET_RECIPE } from "actions/types"
import seed from 'model/seed';

const testRecipe = seed[0];

describe("recipeReducer", () => {    
    it("Should return initial state of {} when no action type passed and inital state not set", () => {
        expect(Object.getOwnPropertyNames(recipeReducer(undefined, {type: null, payload: null})).length).toEqual(0);
    });
    
    it("Should return recipe passed in as payload", () => {
        expect(recipeReducer(undefined, {type: GET_RECIPE, payload: testRecipe})).toMatchObject(testRecipe);
    });
});