import React from 'react';
import { shallow, mount } from 'enzyme';
import model  from "model/seed.js";
import { Edit } from 'components/Recipe/Edit.jsx';
import BackButton from 'components/Buttons/BackButton';
import Form from 'components/Form/Form';

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

    it('renders a h2 tag, a Form, and a BackButton', () => { 
        expect(component.find('h2').length).toEqual(1);  
        expect(component.containsMatchingElement(<Form />)).toEqual(true);  
        expect(component.containsMatchingElement(<BackButton />)).toEqual(true);  
    });
    
});
