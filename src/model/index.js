
import model from "model/seed.js";

let Model = {};

Model.getAllRecipes = function(){
    //1. check to see if model has items in it
    
    //1a. if not, get recipes key from local storage
    
    //1a. convert them to JSON
    
    //1a. iterate over keys and add to Model

    //2. return model
    return model;
};

Model.addRecipe = function(recipe){
    //look for recipe in model and if it exists, then return error
    if(model.findIndex( item => item.id === recipe.id ) > -1){    
        return { error: "Already exists" };
    }   

    //push recipe to model
    model.push(recipe);  

    //*** call function to transfer recipes held in Model to localstorage recipes

    return model;
};

Model.editRecipe = function(recipe){
    //find recipe in model
    let matchPosition = model.findIndex( matchingRecipe => matchingRecipe.id === recipe.id  );
    if(matchPosition === -1){
        return { error: "Does not exist" };    
    }

    model[matchPosition] = recipe;   
    return model;
};

Model.getRecipeById = function(id){
    let recipe = model.filter( recipe => recipe.id === id);
    if(recipe.length < 1){
        return { error: "Recipe does not exist" };
    }    
    return recipe[0];    
};

Model.deleteRecipeById = function(id){
    //find recipe in model
    let matchPosition = model.findIndex( recipe => recipe.id === id );
    if(matchPosition === -1){
        return { error: "Recipe does not exist" };
    }

    //splice it out
    model.splice(matchPosition, 1);
    return model;
};

function getRecipesFromStorage(){
    return model;
}

function addRecipesToStorage(){

}

export default Model;