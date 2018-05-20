import React from 'react';
import { shallow, mount } from 'enzyme';
import Edit from './Edit.jsx';
import model  from "../../model/seed.js";

describe('Edit', () => {
  
    let component;
    let mockHistory = jest.fn();
    let mockFormHandler = jest.fn();
    let mockRecipe = model[0];
   

    beforeEach(() => {
        component = shallow(
        <Edit 
            history={ mockHistory } 
            editRecipe={ mockFormHandler } 
            recipe={ mockRecipe } 
        />);
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});
