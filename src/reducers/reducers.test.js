import types from '../constants/';
import { reducer, initialState } from './reducer-recipes.js';

describe('Reducers', () => {
    it('Should return initial state when no action passed', () => {
        expect(reducer(undefined, [])).toEqual(initialState);
    });

    describe('Filter Recipes', () => {
        it('should return the correct state', () => {

        });
    });

    describe('Add Recipe', () => {
        it('should return the correct state', () => {

        });
    });

    describe('Delete Recipe', () => {
        it('should return the correct state', () => {

        });
    });

    describe('Edit Recipe', () => {
        it('should return the correct state', () => {

        });
    });
});
