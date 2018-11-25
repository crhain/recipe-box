import React from "react";
import { shallow, mount } from "enzyme";
import RecipeForm from "components/Form/RecipeForm";
import RecipeFormTextField from "components/Form/RecipeFormTextField";
import RecipeFormTextBoxField from "components/Form/RecipeFormTextBoxField";
import RecipeFormInvisibleTextField from "components/Form/RecipeFormInvisibleTextField";
import RecipeFormIngredientEntry from "components/Form/RecipeFormIngredientEntry";
import RecipeFormInstructionEntry from "components/Form/RecipeFormInstructionEntry";

let component; 
let meta = {error: null, touched: false};
const fields = [];
const mockFormHandler = jest.fn();
const mockHistory = [];
const input = {};


describe("Form", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeForm 
                fields={ fields }
                formHandler={ mockFormHandler } 
                history={ mockHistory }
            />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});

describe("RecipeFormTextField", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeFormTextField 
                input={input}
                label={"test"}
                meta={ meta }            
            />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});


describe("RecipeFormTextBoxField", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeFormTextBoxField 
                input={input}
                label={"test"}
                meta={ meta } 
            />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});


describe("RecipeFormInvisibleTextField", () => {
        
    beforeEach(() => {
        component = shallow(
            <RecipeFormInvisibleTextField 
                input={input}
                label={"test"}
                meta={ meta } 
            />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
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
