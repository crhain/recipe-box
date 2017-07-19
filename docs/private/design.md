DESIGN DOCUMENT
======================================================


TODO
--------------------------------------------
* convert components to pure functions
* add RecipeEdit component and tests (and hook up to router)
* finish writing all unit tests
* write e2e tests
* create actual app!



COMPONENTS
--------------------------------------------

#### MAIN SCREEN
1. Title
2. control-bar
    - search bar : typing in it will filter the recipe-listing in real time to only show names that match
    - add button (links to RECIPE-FULL (add mode))  /recipe/new
3. recipe-listing
  - recipe
   - delete-button (links to verify popup) /recipe/delete
   - edit-button (links to recipe-full edit mode) /recipe/edit/recipename

#### RECIPE-FULL (disply, edit, and add modes)
/recipe
1. Title
2. Ingredients-panel
 - ingredient
  - quantity
  - unit (selection)
  - name
3. Instruction-panel

STATE
-------------------------------------------------

recipes : array of recipe objects
  recipe : object -> {name: "stuff", ingriedents: [{quantity: 10, unit: "tablespoon", "name" }], directions: "" }
recipeList : array of recipe names?  
mode: string -> "add", "edit", "display"  



USING REACT ROUTER
-----------------------------------------------------

[Instructions](https://reacttraining.com/react-router/web/guides/quick-start)
