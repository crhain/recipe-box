import { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } from ".";
import { GET_RECIPES, GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./types";


describe("Actions", () => {
    describe("getRecipes action", () => {
        it("Should return an action with type GET_RECIPES", () => {                            
            expect(getRecipes().type).toEqual(GET_RECIPES);
    
        });
    });
    
    describe("getRecipe action", () => {
        it("should return an action with type GET_RECIPE", () => {
            expect(getRecipe().type).toEqual(GET_RECIPE);
        });
    });

    describe("addRecipe action", () => {
        it("should return an action with type ADD_RECIPE", () => {
            expect(addRecipe().type).toEqual(ADD_RECIPE);
        });
    });

    describe("editRecipe action", () => {
        it("should return an action with type EDIT_RECIPE", () => {
            expect(editRecipe().type).toEqual(EDIT_RECIPE);
        });
    });

    describe("deleteRecipe action", () => {
        it("should return an action with type DELETE_RECIPE", () => {
            expect(deleteRecipe().type).toEqual(DELETE_RECIPE);
        });
    });
    

});