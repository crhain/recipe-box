import recipeListReducer from "./recipeListReducer";
import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/types";
import { model } from "../model/";



const beef = {
    id: "beefstrogonoff", 
    title: "Beef Strogonoff", 
    servings: 4,
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
    servings: 2,
    ingredients: [
        "10-16 ounces egg noodles",
        "1 (10 ounce) can cream of mushroom soup",
        "1 (10 ounce) can peas",
        "2 (6 ounce) cans tuna in water",
        "5-6 ounces milk (1/2 of soup can)",
        "1 teaspoon butter, pat"
    ]
};

const editedRecipe = {
    id: "beefstrogonoff", 
    servings: 4,
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


describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });

    describe("GET_RECIPES", () => {
                    
        it("Should return the correct state when called with GET_RECIPES action type", () => {
            expect(recipeListReducer(undefined, {type: GET_RECIPES, payload: null})).toMatchObject(model);
        });
    });
    
    describe("ADD_RECIPE", () => {
        
        it("Should add new recipe to recipes", () => {            
            expect( recipeListReducer( undefined, { type: ADD_RECIPE, recipe: newRecipe } ) ).toContainEqual(newRecipe);                        
        });    

        it("Should not add recipe if recipe already exists", () => {
            
            let result = recipeListReducer( model, { type: ADD_RECIPE, recipe: beef } );
            let numberRecipeCopies = result.filter( recipe => recipe.id === beef.id ).length;            
            expect( numberRecipeCopies ).toBe(1);
        }); 
          
    });

    describe("EDIT_RECIPE", () => {
       
        it("Should return new list of recipes with changed recipe in it", () => {
            expect( recipeListReducer( model, { type: EDIT_RECIPE, recipe: editedRecipe } ) ).toContainEqual(editedRecipe);
        });
        
        it("Should **not** return new list of recipes with old recipe in it", () => {
            expect( recipeListReducer( model, { type: EDIT_RECIPE, recipe: editedRecipe } ) ).not.toContainEqual(beef);
        });

    });

    describe("DELETE_RECIPE", () => {
        it("Should delete recipe from recipes", () => {
            expect( recipeListReducer( model, { type: DELETE_RECIPE, id: beef.id, history: [] } ) ).not.toContainEqual(beef);
        });    

        it("Should not delete anything if recipe not in recipes", () => {
            expect( recipeListReducer( model, { type: DELETE_RECIPE, id: newRecipe.id, history: [] } ).length ).toBe(model.length);
        });    
    });
    
});
