DESIGN DOCUMENT
======================================================


TODO
--------------------------------------------
* create dummy data structure to represent recipes and hook up to actions and reducers
* add New form that adds to recipes to datastructure
* add delete action to remove recipes from datastructure
* add edit action to edit recipes in datastructure
* get all unit tests to pass (add we add new stuff such as actions and reducers)
* add in ability to store data in LocalStorage and retrieve from LocalStorage
* write e2e tests
* finish styling




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
