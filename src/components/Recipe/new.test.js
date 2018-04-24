import React from 'react';
import { shallow, mount } from 'enzyme';
import New from './New.jsx';

describe('New', () => {
  
    let component;

    beforeEach(() => {
        component = shallow(<New />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});