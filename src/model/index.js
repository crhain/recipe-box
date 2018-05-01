
export const model = [                
    {
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
    },
    {
        id: "lasagna", 
        title: "Lasagna", 
        servings: 4,
        ingredients: [
            "1 1/4 pounds Johnsonville Ground Mild Italian sausage",
            "3/4 pound ground beef",
            "1 medium onion, diced",
            "3 garlic cloves, minced",
            "2 cans (one 28 ounces, one 15 ounces) crushed tomatoes",
            "2 cans (6 ounces each) tomato paste",
            "2/3 cup water",
            "2 to 3 tablespoons sugar",
            "3 tablespoons plus 1/4 cup minced fresh parsley, divided",
            "2 teasponns dried basil",
            "3/4 teaspoon fennel seed",
            "3/4 teaspoon salt, divided",
            "1/4 teaspoon coarsely ground pepper",
            "1 large egg, lightly beaten",
            "1 carton (15 ounces) ricotta cheese",
            "4 cups shredded part-skim mozzarella cheese",
            "3/4 cup grated Parmesan cheese"
        ]
    },
    {
        id: "spanishrice", 
        title: "Spanish Rice", 
        servings: 4,
        ingredients: [
            "2 tablespoons olive oil",
            "1 onion, finely chopped (about 1 cup)",
            "1 garlic clove, minced",
            "2 cups of medium or long-grain white rice",
            "3 cups chicken stock",
            "1 heaping tablespoon tomato paste or 1 cup of diced fresh or cooked tomatoes, strained",
            "Pinch of oregano",
            "1 teaspoon salt"
        ]
    }
];

let Model = {};

Model.getAllRecipes = function(){
    return model;
}

Model.addRecipe = function(recipe){
    model.push(recipe);
    return model;
}

Model.editRecipe = function(recipe){
    //find recipe in model
    let matchPosition = model.findIndex( matchingRecipe => matchingRecipe.id === recipe.id  );
    if(matchPosition !== -1){
        model[matchPosition] = recipe;
    }

    return model;
}

Model.getRecipeById = function(id){
    let recipe = model.filter( recipe => recipe.id === id);
    if(recipe.length > 0){
        return recipe[0];
    }
    
    return {};
}

Model.deleteRecipeById = function(id){
    //find recipe in model
    let targetRecipeIndex = model.findIndex( recipe => recipe.id === id );
    //splice it out
    model.splice(targetRecipeIndex, 1);
    return model;
}





export default Model;