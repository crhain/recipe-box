import React from 'react';
import { shallow, mount } from 'enzyme';
import Recipe from './index.jsx';

describe('Recipe', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<Recipe />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});