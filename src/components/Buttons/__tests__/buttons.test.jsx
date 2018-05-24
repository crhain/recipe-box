import React from "react";
import { shallow, mount } from "enzyme";
import AddButton from "components/Buttons/AddButton";
import BackButton from "components/Buttons/BackButton";
import DeleteButton from "components/Buttons/DeleteButton";
import EditButton from "components/Buttons/EditButton";

let component; 
describe("AddButton", () => {
        
    beforeEach(() => {
        component = shallow(
            <AddButton />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
    
});

describe("BackButton", () => {
    beforeEach(() => {
        component = shallow(
            <BackButton />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});

describe("DeleteButton", () => {
    beforeEach(() => {
        component = shallow(
            <DeleteButton />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});

describe("EditButton", () => {
    beforeEach(() => {
        component = shallow(
            <EditButton />
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });
});


