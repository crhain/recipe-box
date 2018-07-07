import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeView } from "components/Recipe/RecipeView";
import Form from 'components/Form/Form';
import BackButton from 'components/Buttons/BackButton';
import { New } from 'components/Recipe/New';

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

    it('renders a heading, a Form, and a BackButton', () => { 
        expect(component.find('.recipe-new__heading').length).toEqual(1);  
        expect(component.containsMatchingElement(<Form />)).toEqual(true);  
        expect(component.containsMatchingElement(<BackButton />)).toEqual(true);  
    });

});