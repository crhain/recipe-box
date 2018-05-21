import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Form";
import FormTextField from "./FormTextField";
import FormTextBoxField from "./FormTextBoxField";
import FormInvisibleTextField from "./FormInvisibleTextField";


let component; 
const fields = [];
const mockFormHandler = jest.fn();
const mockHistory = [];


describe("Form", () => {
        
    beforeEach(() => {
        component = shallow(
            <Form 
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

describe("FormTextField", () => {
        
    beforeEach(() => {
        component = shallow(
            <FormTextField />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});


describe("FormTextBoxField", () => {
        
    beforeEach(() => {
        component = shallow(
            <FormTextBoxField />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});


describe("FormInvisibleTextField", () => {
        
    beforeEach(() => {
        component = shallow(
            <FormInvisibleTextField />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});