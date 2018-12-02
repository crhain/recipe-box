import recipeListReducer from "reducers/recipeListReducer";
import Model from "model/";

Model.toggleTestMode(true);

describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });                    
});
