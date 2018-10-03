import model  from "model/seed.js";
import Model from "model/";

Model.toggleTestMode(true);

const beef =   {
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


describe("Model", () => {
    describe("getAllRecipes", () => {
        it("gets an array of recipes that has three recipes that match the existing model", () => {
            expect(Model.getAllRecipes().length).toBe(3);
            expect(Model.getAllRecipes()).toMatchObject(model);
        });
    });

    describe("addRecipe", () => {
        it("adds a recipe to model", () => {
            Model.addRecipe(newRecipe);
            expect(Model.getAllRecipes()).toContainEqual(newRecipe);

        });
    });

    describe("getRecipeById", () => {
        it("gets a recipe by id from model", () => {
            expect(Model.getRecipeById("beefstrogonoff")).toMatchObject(beef);
        });
    });

    describe("editRecipe", () => {
        it("edits an existing recipe", () => {
            Model.editRecipe(editedRecipe);
            expect(Model.getAllRecipes()).toContainEqual(editedRecipe);
        });
    });

   

    describe("deleteRecipeById", () => {
        it("deletes a recipe by id from model", () => {
            Model.deleteRecipeById("beefstrogonoff");
            expect(Model.getRecipeById("beefstrogonoff").error).toBeTruthy();
        });
    });
});