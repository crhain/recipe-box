import React from "react";
import { mount, shallow } from "enzyme";
import MessageDisplay from 'components/MessageDisplay';

var component;

describe("MessageDisplay", () => {

    beforeEach(() => {
        component = shallow(
            <MessageDisplay />        
        );
    });

   it("renders correctly", () => {    
        expect(component.exists()).toEqual(true);
   }); 
});

