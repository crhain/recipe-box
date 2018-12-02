import recipeReducer from "reducers/recipeReducer";
import { GET_RECIPE } from "actions/types"
import Model from "model";


Model.toggleTestMode(true);

const mockModel = {
    getRecipeById: (recipeId) => {
        return {actionType: "GET_RECIPE"}
    }
}

describe("recipeReducer", () => {    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(Object.getOwnPropertyNames(recipeReducer(undefined, {type: null, payload: null})).length).toEqual(0);
    });
    
    it("Should call GET_RECIPE case when passed an action with GET_RECIPE type", () => {
        expect(recipeReducer(undefined, {type: GET_RECIPE, payload: {id: ""}}, mockModel).actionType).toEqual("GET_RECIPE");
    });
});