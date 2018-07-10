import recipes from "model/seed.js";

let Model = {};

Model.getAllRecipes = function(){
    //1. check to see if recipes has items in it
    
    //1a. if not, get recipes key from local storage
    
    //1a. convert them to JSON
    
    //1a. iterate over keys and add to Model

    //2. return recipes
    return recipes;
};

Model.addRecipe = function(recipe){
    //look for recipe in recipes and if it exists, then return error
    if(recipes.findIndex( item => item.id === recipe.id ) > -1){    
        return { error: "Already exists" };
    }   

    //push recipe to recipes
    recipes.push(recipe);  

    //*** call function to transfer recipes held in Model to localstorage recipes

    return recipes;
};

Model.editRecipe = function(recipe){
    //find recipe in recipes
    let matchPosition = recipes.findIndex( matchingRecipe => matchingRecipe.id === recipe.id  );
    if(matchPosition === -1){
        return { error: "Does not exist" };    
    }

    recipes[matchPosition] = recipe;   
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
    return recipes;
};

function getRecipesFromStorage(){
    return recipes;
}

function addRecipesToStorage(){

}

export default Model;