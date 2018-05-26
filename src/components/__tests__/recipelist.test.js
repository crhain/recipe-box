import React from 'react';
import { shallow, mount } from 'enzyme';
import model  from "model/seed.js";
import { RecipeList } from 'components/RecipeList';
import AddButton from 'components/Buttons/AddButton';

describe('RecipeList', () => {
  
    let component;
    let mockGetRecipesAction = jest.fn();
    let mockRecipes = model;

    beforeEach(() => {
        component = shallow(<RecipeList getRecipes={ mockGetRecipesAction } recipes={ mockRecipes } />);
    });

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('It shows a page title, and add new recipe button, and a list of recipes', () => {
        expect(component.find('h1').length).toEqual(1); 
        expect(component.containsMatchingElement(<AddButton />)).toEqual(true); 
        expect(component.find('ul').length).toEqual(1); 
    });

    it('It shows a list of recipes that match the recipes state passed to the component', () => {
        let recipeListElements = component.find('ul li');
        expect(recipeListElements.length).toEqual(mockRecipes.length);
        expect(recipeListElements.everyWhere((el, i) => el.text() === mockRecipes[i]['title'])).toEqual(true);
    });

});