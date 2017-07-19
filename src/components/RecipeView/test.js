import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeView from './';

describe('RecipeView', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<RecipeView />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});