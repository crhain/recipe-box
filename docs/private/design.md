DESIGN DOCUMENT
======================================================


TODO
--------------------------------------------

* hook up actions and reducers for getting a recipe, adding a recipe, editing recipe, and deleting a recipe
* create component for adding new recipes
* create edit component for editing existing recipe
* add delete and edit buttons on recipeView
* convert application to use localStorage for storing model instead of in-memory model
* write e2e tests and test out application
* finish styling to it's all nice and purty




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
