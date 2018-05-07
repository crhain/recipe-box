import React from "react";
import { shallow, mount } from "enzyme";
import AddButton from "./AddButton";
import BackButton from "./BackButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

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


// let component;
// let mockGetRecipeFunction = jest.fn();
// let mockDeleteRecipeFunction = jest.fn();
// let mockHistory = jest.fn();
// let mockMatch = {
//     params: {
//         id: "xyz"
//     }
// }
// let mockRecipe = model[0];