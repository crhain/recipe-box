import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeNew from './';

describe('RecipeNew', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<RecipeNew />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});