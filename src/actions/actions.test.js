import actions from '.';
import types from '../constants/';

describe('Actions', () => {
    
     

    it('should create an action to filter recipes', () => {
        const searchTerm = "Beef Stroganof";
        const expectedAction = {
            type: types.FILTER_RECIPES,
            term: searchTerm
        };

        expect(actions.filterRecipes(searchTerm)).toEqual(expectedAction);

    });

    it('should create an action to add a recipe', () => {
        const recipe = {};
        const expectedAction = {
            type: types.ADD_RECIPE,
            recipe: recipe
        };

        expect(actions.addRecipe(recipe)).toEqual(expectedAction);
    });

    it('should create an action to delete a recipe', () => {
        const expectedAction = {
            type: types.DELETE_RECIPE,
            id: 1
        };

        expect(actions.deleteRecipe(id)).toEqual(expectedAction);
    });

    it('should create an action to edit a recipe', () => {
        const recipe = {};
        const expectedAction = {
            type: types.EDIT_RECIPE,
            id: 1,
            recipe: recipe
        };

        expect(actions.filterRecipes(id, recipe)).toEqual(expectedAction);
    });


});