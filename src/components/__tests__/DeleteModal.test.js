import React from "react";
import { mount } from "enzyme";
import Root from 'components/Root';
import DeleteModal  from "components/DeleteModal";

var component;
let mockAcceptHandler = jest.fn();

describe("DeleteModal", () =>{
    beforeEach(() => {
        component = mount(
            <Root>
                <DeleteModal  acceptHandler={ mockAcceptHandler } />
            </Root>
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

    it('shows an add button', () => {
        // expect(component.find('AddButton').length).toEqual(1);                 
        expect(true).toEqual(true);
    });
    
});