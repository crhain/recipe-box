import recipeListReducer from "reducers/recipeListReducer";
import { GET_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "actions/types";
import seed  from "model/seed.js";
import Model from "model/";

Model.toggleTestMode(true);

const newBeef = {
    id: "beefstrogonoff", 
    title: "Beef Strogonoff", 
    servings: "4",
    ingredients: "1 1/2 pounds beef sirloin steak\n8 ounces fresh mushrooms\n2 medium onions, thinly sliced\n1 garlic clove, finely chopped\n1/2 cup butter\n1 1/2 cups Progresso, beef flavored broth\n1/2 teaspoon salt\n1 teaspoon Worcestshire sauce\n1/4 cup Gold Medal all-purpose flour\n1 1/2 cups sour cream\n3 cups hot cooked egg noodles"    
};


const beef = seed[0];

const newRecipe = { 
    id: "tunafishcasserole",   
    title: "Tuna Fish Casserole",
    servings: "2",
    ingredients: [
        {ingredient: "10-16 ounces egg noodles"},
        {ingredient: "1 (10 ounce) can cream of mushroom soup"},
        {ingredient: "1 (10 ounce) can peas"},
        {ingredient: "2 (6 ounce) cans tuna in water"},
        {ingredient: "5-6 ounces milk (1/2 of soup can)"},
        {ingredient: "1 teaspoon butter, pat"}                                                
    ]
    
};

const editedRecipe = {
    id: "beefstrogonoff", 
    servings: 4,
    title: "Beef Strogonoff Deluxe", 
    ingredients: [
        {ingredient: "1 1/2 pounds beef sirloin steak"},
        {ingredient: "8 ounces fresh mushrooms"},
        {ingredient: "2 medium onions, thinly sliced"},
        {ingredient: "1 garlic clove, finely chopped"},
        {ingredient: "1/2 cup butter"},
        {ingredient: "1 1/2 cups Progresso, beef flavored broth"},
        {ingredient: "1/2 teaspoon salt"},
        {ingredient: "1 teaspoon Worcestshire sauce"},
        {ingredient: "1/4 cup Gold Medal all-purpose flour"},
        {ingredient: "1 1/2 cups sour cream"},
        {ingredient: "3 cups hot cooked egg noodles"}                
    ]
};


describe("recipeListReducer", () => {
    
    it("Should return initial state of [] when no action type passed and inital state not set", () => {
        expect(recipeListReducer(undefined, {type: null, payload: null}).length).toEqual(0);
    });

    describe("GET_RECIPES", () => {
                    
        it("Should return the correct state when called with GET_RECIPES action type", () => {
            expect(recipeListReducer(undefined, {type: GET_RECIPES, payload: null})).toMatchObject(seed);
        });
    });
    
    describe("ADD_RECIPE", () => {
        
        it("Should add new recipe to recipes", () => {            
            expect( recipeListReducer( undefined, { type: ADD_RECIPE, recipe: newRecipe, history: [] } )[3] ).toEqual(newRecipe);                        
        });    

        it("Should not add recipe if recipe already exists", () => {
            
            let result = recipeListReducer( seed, { type: ADD_RECIPE, recipe: newBeef, history: [] } );
            let numberRecipeCopies = result.filter( recipe => recipe.id === beef.id ).length;            
            expect( numberRecipeCopies ).toBe(1);
        }); 
          
    });

    describe("EDIT_RECIPE", () => {
       
        it("Should return new list of recipes with changed recipe in it", () => {
            expect( recipeListReducer( seed, { type: EDIT_RECIPE, recipe: editedRecipe, history: [] } ) ).toContainEqual(editedRecipe);
        });
        
        it("Should **not** return new list of recipes with old recipe in it", () => {
            expect( recipeListReducer( seed, { type: EDIT_RECIPE, recipe: editedRecipe, history: [] } ) ).not.toContainEqual(beef);
        });

    });

    describe("DELETE_RECIPE", () => {
        it("Should delete recipe from recipes", () => {
            expect( recipeListReducer( seed, { type: DELETE_RECIPE, id: beef.id, history: [] } ) ).not.toContainEqual(beef);
        });    

        it("Should not delete anything if recipe not in recipes", () => {
            expect( recipeListReducer( seed, { type: DELETE_RECIPE, id: newRecipe.id, history: [] } ).length ).toBe(seed.length);
        });    
    });
    
});
