import seed from "model/seed.js";

let Model = {};
let recipes = seed;

Model.getAllRecipes = function(){
    
    if(shouldGetRecipesFromStorage()){
        recipes = getRecipesFromStorage();
    }

    return recipes;
};

Model.addRecipe = function(recipe){
    //look for recipe in recipes and if it exists, then return error
    if(recipes.findIndex( item => item.id === recipe.id ) > -1){    
        return { error: "Already exists" };
    }   

    //push recipe to recipes
    recipes.push(recipe);  
        
    addRecipesToStorage();
    
    return recipes;
};

Model.editRecipe = function(recipe){
    //find recipe in recipes
    let matchPosition = recipes.findIndex( matchingRecipe => matchingRecipe.id === recipe.id  );
    if(matchPosition === -1){
        return { error: "Does not exist" };    
    }

    recipes[matchPosition] = recipe;   

    addRecipesToStorage();

    return recipes;
};

Model.getRecipeById = function(id){
    let recipe = recipes.filter( recipe => recipe.id === id);
    if(recipe.length < 1){
        return { error: "Recipe does not exist" };
    }    
    return recipe[0];    
};

Model.deleteRecipeById = function(id){
    //find recipe in recipes
    let matchPosition = recipes.findIndex( recipe => recipe.id === id );
    if(matchPosition === -1){
        return { error: "Recipe does not exist" };
    }

    //splice it out
    recipes.splice(matchPosition, 1);

    addRecipesToStorage();

    return recipes;
};

//Function that checks to see if recipes state should be retrieved from localstorage or not
function shouldGetRecipesFromStorage(){
    return false;
}

//Function to check if recipes state should be added to localstorage
function shouldAddRecipesToStorage(){
    return false;
}

//Function to retireve recipes state from localstorage and convert to appropriate format for
// in memory storage
function getRecipesFromStorage(){
    return recipes;
}

//Function to add recipes to localstorage in appropriate format
function addRecipesToStorage(){
    if(shouldAddRecipesToStorage()){
        //do something
    }
}

export default Model;