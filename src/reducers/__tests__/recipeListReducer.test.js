import recipeListReducer from "reducers/recipeListReducer";
import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import Model from "model/";

Model.toggleTestMode(true);

const mockModel = {
    getAllRecipes: () => { return {actionType: "GET_RECIPES"} },
    addRecipe: (recipe) => { return {actionType: "ADD_RECIPE"} },
    editRecipe: (recipe) => { return {actionType: "EDIT_RECIPE"} },
    deleteRecipeById: (recipeId) => { return {actionType: "DELETE_RECIPE"} }
}

const mockRecipe = {
    title: "",
    description: "",
    image: "",
    servings: "",
    id: "",
    ingredients: [],
    instructions: []
}

const mockHistory = [];

describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });
    
    it("Should call GET_RECIPES case when passed an action with GET_RECIPES type", () => {
        expect(recipeListReducer(undefined, {type: GET_RECIPES, payload: [], history: mockHistory}, mockModel).actionType).toEqual("GET_RECIPES");
    });

    it("Should call ADD_RECIPE case when passed an action with ADD_RECIPE type", () => {
        expect(recipeListReducer(undefined, {type: ADD_RECIPE, recipe: mockRecipe, history: mockHistory}, mockModel).actionType).toEqual("ADD_RECIPE");
    });

    it("Should call EDIT_RECIPE case when passed an action with EDIT_RECIPE type", () => {
        expect(recipeListReducer(undefined, {type: EDIT_RECIPE, recipe: mockRecipe, history: mockHistory}, mockModel).actionType).toEqual("EDIT_RECIPE");
    });

    it("Should call DELETE_RECIPE case when passed an action with DELETE_RECIPE type", () => {
        expect(recipeListReducer(undefined, {type: DELETE_RECIPE, id: mockRecipe.id, history: mockHistory}, mockModel).actionType).toEqual("DELETE_RECIPE");
    });
});
