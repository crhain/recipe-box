import React from 'react';
import { shallow, mount } from 'enzyme';
import Edit from './Edit.jsx';

describe('Edit', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<Edit />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});