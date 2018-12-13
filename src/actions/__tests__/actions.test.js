import { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, setMessageDisplay } from "actions/";
import { GET_RECIPES, GET_RECIPE, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SET_MESSAGE_DISPLAY } from "actions/types";

const recipe = {
    id: "beefstrogonoff", 
    title: "Beef Strogonoff", 
    ingredients: [
        "1 1/2 pounds beef sirloin steak", 
        "8 ounces fresh mushrooms",
        "2 medium onions, thinly sliced",
        "1 garlic clove, finely chopped",
        "1/2 cup butter",
        "1 1/2 cups Progresso, beef flavored broth",
        "1/2 teaspoon salt",
        "1 teaspoon Worcestshire sauce",
        "1/4 cup Gold Medal all-purpose flour",
        "1 1/2 cups sour cream",
        "3 cups hot cooked egg noodles"
    ]
};

const recipeID = "beefstrogonoff";


describe("Actions", () => {
    describe("getRecipes action", () => {
        it("Should return an action with type GET_RECIPES", () => {                            
            expect(getRecipes().type).toEqual(GET_RECIPES);
    
        });
    });
    
    describe("getRecipe action", () => {
        it("Should return an action with type GET_RECIPE", () => {
            expect(getRecipe("beefstrogonoff").type).toEqual(GET_RECIPE);
        });

        it("Should return an action with recipeID equal to one passed in when called", () => {
            expect(getRecipe(recipeID).payload.id).toEqual(recipeID);
        });
    });

    describe("addRecipe action", () => {
        it("Should return an action with type ADD_RECIPE", () => {
            expect(addRecipe(recipe).type).toEqual(ADD_RECIPE);
        });

        it("Should return with recipe passed to action attached as recipe", () => {
            expect(addRecipe(recipe).payload.recipe).toEqual(recipe);
        });
    });

    describe("editRecipe action", () => {
        it("Should return an action with type EDIT_RECIPE", () => {
            expect(editRecipe(recipe).type).toEqual(EDIT_RECIPE);
        });

        it("Should return with recipe passed to action attached as recipe", () => {
            expect(editRecipe(recipe).payload.recipe).toEqual(recipe);
        });
    });

    describe("deleteRecipe action", () => {
        it("Should return an action with type DELETE_RECIPE", () => {
            expect(deleteRecipe(recipeID).type).toEqual(DELETE_RECIPE);
        });

        it("Should return an action with recipeID = to recipeID passed to action", () => {
            expect(deleteRecipe(recipeID).payload.id).toEqual(recipeID);
        });
    });

    describe("setMessageDisplay action", () => {
        it("Should return an action with type SET_MESSAGE_DISPLAY", () => {
            expect(setMessageDisplay("").type).toEqual(SET_MESSAGE_DISPLAY);
        });

        it("Should return an action with message = to message passed to action", () => {
            let message = "This is just a testing of the emergency message service.";
            expect(setMessageDisplay(message).payload.message).toEqual(message);
        });
    });
    
});