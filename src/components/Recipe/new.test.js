import React from 'react';
import { shallow, mount } from 'enzyme';
import New from './New.jsx';

describe('New', () => {
  
    let component;
    let mockHistory = jest.fn();
    let mockFormHandler = jest.fn();

    beforeEach(() => {
        component = shallow(
        <New 
            history={ mockHistory }
            addRecipe= { mockFormHandler }                       
        />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

});