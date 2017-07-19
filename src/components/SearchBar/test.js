import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './';

describe('RecipeList', () => {
  
    let component;
    let submit = jest.fn()

    beforeEach(() => {
        component = shallow(<SearchBar />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});