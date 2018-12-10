import {  RecipeLimitReached, DuplicateRecipe, RecipeDoesNotExist } from "model/error.js";

describe("Error", () => {
    describe("RecipeLimitReached", () => {
        it("Instantiates as an instance of Error and of RecipeLimitReached", () => {
            let error = new RecipeLimitReached("Test message");
            expect(error instanceof Error).toEqual(true);
            expect(error instanceof RecipeLimitReached).toEqual(true);
        });
     
        it("Uses passed message and default message if no message passed", () => {
            let error = new RecipeLimitReached("Test message");
            expect(error.message).toEqual("Test message");
            let defaultError = new RecipeLimitReached();
            expect(defaultError.message).toEqual("No more recipes can be added!");
        });
    });

    describe("DuplicateRecipe", () => {
        it("Instantiates as an instance of Error and of DuplicateRecipe", () => {
            let error = new DuplicateRecipe("Test message");
            expect(error instanceof Error).toEqual(true);
            expect(error instanceof DuplicateRecipe).toEqual(true);
        });
     
        it("Uses passed message and default message if no message passed", () => {
            let error = new DuplicateRecipe("Test message");
            expect(error.message).toEqual("Test message");
            let defaultError = new DuplicateRecipe();
            expect(defaultError.message).toEqual("That recipe already exists!");
        });
    });

    describe("RecipeDoesNotExist", () => {
        it("Instantiates as an instance of Error and of RecipeDoesNotExist", () => {
            let error = new RecipeDoesNotExist("Test message");
            expect(error instanceof Error).toEqual(true);
            expect(error instanceof RecipeDoesNotExist).toEqual(true);
        });
     
        it("Uses passed message and default message if no message passed", () => {
            let error = new RecipeDoesNotExist("Test message");
            expect(error.message).toEqual("Test message");
            let defaultError = new RecipeDoesNotExist();
            expect(defaultError.message).toEqual("That recipe does not exist!");
        });
    });
});

