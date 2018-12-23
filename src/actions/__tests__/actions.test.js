import {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe
} from "actions/";
import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE
} from "actions/types";
import Model from "model";

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

const modelStub = {
  getAllRecipes: function() {
    return [];
  },
  addRecipe: function(recipe) {
    return [];
  },
  editRecipe: function(recipe) {
    return [];
  },
  getRecipeById: function(id) {
    return {};
  },
  deleteRecipeById: function(id) {
    return [];
  }
};

const historyStub = [];

describe("Actions", () => {
  describe("getRecipes action", () => {
    it("Should return an action with type GET_RECIPES", () => {
      expect(getRecipes(modelStub).type).toEqual(GET_RECIPES);
    });
  });

  describe("getRecipe action", () => {
    it("Should return an action with type GET_RECIPE", () => {
      expect(getRecipe("beefstrogonoff", modelStub).type).toEqual(GET_RECIPE);
    });
  });

  describe("addRecipe action", () => {
    it("Should return an action with type ADD_RECIPE", () => {
      expect(addRecipe(recipe, historyStub, modelStub).type).toEqual(
        ADD_RECIPE
      );
    });
  });

  describe("editRecipe action", () => {
    it("Should return an action with type EDIT_RECIPE", () => {
      expect(editRecipe(recipe, historyStub, modelStub).type).toEqual(
        EDIT_RECIPE
      );
    });
  });

  describe("deleteRecipe action", () => {
    it("Should return an action with type DELETE_RECIPE", () => {
      expect(deleteRecipe(recipeID, modelStub).type).toEqual(DELETE_RECIPE);
    });
  });
});
