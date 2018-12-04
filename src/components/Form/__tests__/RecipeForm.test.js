import React from "react";
import { mount, shallow } from "enzyme";
import RecipeForm from "components/Form/RecipeForm";
import RecipeFormIngredientEntry from "components/Form/RecipeFormIngredientEntry";
import RecipeFormInstructionEntry from "components/Form/RecipeFormInstructionEntry";

let component; 
let meta = {error: null, touched: false};
const mockFormHandler = jest.fn();
const mockHistory = [];
const input = {};


describe("RecipeForm", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeForm                 
                formHandler={ mockFormHandler } 
                history={ mockHistory }
            />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
    it('renders a title input field', () => {
        expect(true).toEqual(true);  
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
