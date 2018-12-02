import recipeListReducer from "reducers/recipeListReducer";
import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import Model from "model/";

Model.toggleTestMode(true);

const mockModel = {
    getAllRecipes: () => { return {actionType: "GET_RECIPES"} },
    addRecipe: () => { return {actionType: "ADD_RECIPE"} },
    editRecipe: () => { return {actionType: "EDIT_RECIPE"} },
    deleteRecipeById: () => { return {actionType: "DELETE_RECIPE"} }
}

const mockHistory = [];

describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });
    
    it("Should call GET_RECIPES case when passed an action with GET_RECIPES type", () => {
        expect(recipeListReducer(undefined, {type: GET_RECIPES, payload: []}, mockModel).actionType).toEqual("GET_RECIPES");
    });
});
