import React from 'react';
import { shallow, mount } from 'enzyme';
import model from "../model";
import { List } from './List';

describe('RecipeList', () => {
  
    let component;
    let mockGetRecipesAction = jest.fn();
    let mockRecipes = model;

    beforeEach(() => {
        component = shallow(<List getRecipes={ mockGetRecipesAction } recipes={ mockRecipes } />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

});