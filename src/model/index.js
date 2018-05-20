
import model from "./seed.js";

let Model = {};

Model.getAllRecipes = function(){
    return model;
}

Model.addRecipe = function(recipe){
    
    if(model.findIndex( item => item.id === recipe.id ) > -1){    
        return { error: "Already exists" };
    }   
    model.push(recipe);  
    return model;
}

Model.editRecipe = function(recipe){
    //find recipe in model
    let matchPosition = model.findIndex( matchingRecipe => matchingRecipe.id === recipe.id  );
    if(matchPosition === -1){
        return { error: "Does not exist" };    
    }

    model[matchPosition] = recipe;
    console.log("My updated recipe is:");
    console.log(model[matchPosition]);
    return model;
}

Model.getRecipeById = function(id){
    let recipe = model.filter( recipe => recipe.id === id);
    if(recipe.length < 1){
        return { error: "Recipe does not exist" };
    }    
    return recipe[0];    
}

Model.deleteRecipeById = function(id){
    //find recipe in model
    let matchPosition = model.findIndex( recipe => recipe.id === id );
    if(matchPosition === -1){
        return { error: "Recipe does not exist" };
    }

    //splice it out
    model.splice(matchPosition, 1);
    return model;
}

export default Model;