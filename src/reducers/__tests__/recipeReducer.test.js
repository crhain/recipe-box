import recipeReducer from "reducers/recipeReducer";
import Model from "model";


Model.toggleTestMode(true);

describe("recipeReducer", () => {    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });             
});