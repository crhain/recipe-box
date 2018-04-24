import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeList from './';

describe('RecipeList', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<RecipeList />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});