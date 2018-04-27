import React from 'react';
import { shallow, mount } from 'enzyme';
import { RecipeView } from './RecipeView';

describe('Recipe', () => {
  
    let component;
    let mockGetRecipeFunction = jest.fn();
    let mockMatch = {
        params: {
            id: "xyz"
        }
    }
    
    beforeEach(() => {
        component = shallow(<RecipeView getRecipe={ mockGetRecipeFunction } match={ mockMatch }  />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

});