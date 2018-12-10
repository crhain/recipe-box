export class RecipeLimitReached extends Error {
    constructor(message = "No more recipes can be added!"){
        super(message);
        this.name = 'RecipeLimitReached';                
    }
}

export class DuplicateRecipe extends Error {
    constructor(message = "That recipe already exists!"){
        super(message);
        this.name = 'DuplicateRecipe';                
    }
}

export class RecipeDoesNotExist extends Error {
    constructor(message = "That recipe does not exist!"){
        super(message);
        this.name = 'RecipeDoesNotExist';                
    }
}
