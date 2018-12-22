import React from "react";
import { mount } from "enzyme";
import { Root } from "components/Root";
import MessageDisplay from 'components/MessageDisplay';


var component;

describe("MessageDisplay", () => {

    beforeEach(() => {
        component = mount(
            <Root>
                <MessageDisplay />
            </Root>
        );
    });

    it("renders correctly", () => {
        expect(component.exists()).toEqual(true);
    });
});

