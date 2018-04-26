import recipeListReducer from "./recipeListReducer";
import { GET_RECIPES } from "../actions/types";
import model from "../model/";


const beef = {
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

const editedRecipe = {
    id: "beefstrogonoff", 
    title: "Beef Strogonoff Deluxe", 
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

const newRecipe = {
    id: "tunafishcasserole",
    title: "Tuna Fish Casserole",
    ingredients: [
        "10-16 ounces egg noodles",
        "1 (10 ounce) can cream of mushroom soup",
        "1 (10 ounce) can peas",
        "2 (6 ounce) cans tuna in water",
        "5-6 ounces milk (1/2 of soup can)",
        "1 teaspoon butter, pat"
    ]
};


describe("recipeListReducer", () => {
    
    it("Should return initial state of null when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null})).toEqual(null);
    });

    describe("GET_RECIPES", () => {
                    
        it("Should return the correct state when called with GET_RECIPES action type", () => {
            expect(recipeListReducer(null, {type: GET_RECIPES, payload: null})).toMatchObject(model);
        });
    });
    
    describe("ADD_RECIPE", () => {

        it("Should return null if recipe already exists", () => {
            expect( recipeReducer( undefined, { type: ADD_RECIPE, recipe: beef } ) ).toEqual(null);
        }); 

        it("Should add new recipe to recipes", () => {
            //this might be wrong syntax -- might not be able to add not
            expect( recipeReducer( undefined, { type: ADD_RECIPE, recipe: newRecipe } ) ).not.toContainEqual(newRecipe);
        });    
          
    });

    describe("EDIT_RECIPE", () => {
        // it("Should return null if recipe does not exist", () => {
        //     expect( recipeReducer( undefined, { type: GET_RECIPE, recipe: beef } ) ).toEqual(null);
        // });    

        it("Should return new list of recipes with changed recipe in it", () => {
            expect( recipeReducer( undefined, { type: EDIT_RECIPE, recipe: editedRecipe } ) ).toContainEqual(editedRecipe);
        });
        
        it("Should **not** return new list of recipes with old recipe in it", () => {
            expect( recipeReducer( undefined, { type: EDIT_RECIPE, recipe: editedRecipe } ) ).toContainEqual(beef);
        });
    });

    describe("DELETE_RECIPE", () => {
        it("Should delete recipe from recipes", () => {
            expect( recipeReducer( undefined, { type: DELETE_RECIPE, recipe: newRecipe } ) ).not.toContainEqual(newRecipe);
        });    

        // it("", () => {
            
        // });    
    });
    
});
