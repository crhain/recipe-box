import model from "model/seed.js";
import Model from "model/";
import seed from "model/seed";
import {
  RecipeLimitReached,
  DuplicateRecipe,
  RecipeDoesNotExist
} from "model/error.js";

Model.toggleTestMode(true);

const beef = seed[0];

const newRecipe = {
  id: "tunafishcasserole",
  title: "Tuna Fish Casserole",
  servings: 2,
  ingredients: [
    { ingredient: "10-16 ounces egg noodles" },
    { ingredient: "1 (10 ounce) can cream of mushroom soup" },
    { ingredient: "1 (10 ounce) can peas" },
    { ingredient: "2 (6 ounce) cans tuna in water" },
    { ingredient: "5-6 ounces milk (1/2 of soup can)" },
    { ingredient: "1 teaspoon butter, pat" }
  ]
};

const editedRecipe = {
  id: "beefstrogonoff",
  servings: 4,
  title: "Beef Strogonoff Deluxe",
  ingredients: [
    { ingredient: "1 1/2 pounds beef sirloin steak" },
    { ingredient: "8 ounces fresh mushrooms" },
    { ingredient: "2 medium onions, thinly sliced" },
    { ingredient: "1 garlic clove, finely chopped" },
    { ingredient: "1/2 cup butter" },
    { ingredient: "1 1/2 cups Progresso, beef flavored broth" },
    { ingredient: "1/2 teaspoon salt" },
    { ingredient: "1 teaspoon Worcestshire sauce" },
    { ingredient: "1/4 cup Gold Medal all-purpose flour" },
    { ingredient: "1 1/2 cups sour cream" },
    { ingredient: "3 cups hot cooked egg noodles" }
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

    it("will not add more than maximum allowed recipes", () => {
      //populate more than recipe limit into database
      let numRecipesLimit = seed.length;
      Model.setMaxRecipes(numRecipesLimit);
      //should return a recipes array with only 50 recipes
      expect(() => Model.addRecipe(newRecipe)).toThrow(RecipeLimitReached);

      Model.setMaxRecipes(50);
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
      expect(() => {
        return Model.getRecipeById("beefstrogonoff");
      }).toThrowError(RecipeDoesNotExist);
    });
  });
});
