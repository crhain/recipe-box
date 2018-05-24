import React from 'react';
import { shallow, mount } from 'enzyme';
import model  from "../../model/seed.js";
import { RecipeList } from '../RecipeList';

describe('RecipeList', () => {
  
    let component;
    let mockGetRecipesAction = jest.fn();
    let mockRecipes = model;

    beforeEach(() => {
        component = shallow(<RecipeList getRecipes={ mockGetRecipesAction } recipes={ mockRecipes } />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

});