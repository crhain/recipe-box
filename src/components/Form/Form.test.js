import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Form";
import FormTextField from "./FormTextField";
import FormTextBoxField from "./FormTextBoxField";
import FormInvisibleTextField from "./FormInvisibleTextField";


let component; 
let meta = {error: null, touched: false};
const fields = [];
const mockFormHandler = jest.fn();
const mockHistory = [];
const input = {};


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
            <FormTextField 
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


describe("FormTextBoxField", () => {
        
    beforeEach(() => {
        component = shallow(
            <FormTextBoxField 
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


describe("FormInvisibleTextField", () => {
        
    beforeEach(() => {
        component = shallow(
            <FormInvisibleTextField 
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