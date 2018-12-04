import React from "react";
import { mount, shallow } from "enzyme";
import RecipeForm from "components/Form/RecipeForm";
import RecipeFormIngredientEntry from "components/Form/RecipeFormIngredientEntry";
import RecipeFormInstructionEntry from "components/Form/RecipeFormInstructionEntry";
import Root from 'components/Root';

let component; 
let meta = {error: null, touched: false};
const mockFormHandler = jest.fn();
const mockHistory = [];
const input = {};


describe("RecipeForm", () => {
        
    beforeEach(() => {

        component = mount(
            <Root>
                <RecipeForm 
                    formHandler={ mockFormHandler } 
                    history={ mockHistory }
                />
            </Root>
        );
        
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
    it('renders a id input field', () => {
        expect(component.find('div.form__id-field').length).toEqual(1)          
    });

    it('renders a title input field', () => {
        expect(component.find('div.form__title-field').length).toEqual(1)          
    });

    it('renders a description input field', () => {
        expect(component.find('div.form__description-field').length).toEqual(1)          
    });

    it('renders an image input field', () => {
        expect(component.find('div.form__image-field').length).toEqual(1)          
    });

    it('renders a servings input field', () => {
        expect(component.find('div.form__servings-field').length).toEqual(1)          
    });

});

describe("RecipeFormIngredientEntry", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeFormIngredientEntry 
                input={input}
                label={"test"}
                meta={ meta } 
                fields={[]}
            />          
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});

describe("RecipeFormInstructionEntry", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeFormInstructionEntry 
                input={input}
                label={"test"}
                meta={ meta } 
                fields={[]}
            />          
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});
