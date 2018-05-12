import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeView } from "./RecipeView";
import { model } from "../../model";

describe("RecipeView", () => {
  
    let component;
    let mockGetRecipeFunction = jest.fn();
    let mockDeleteRecipeFunction = jest.fn();
    let mockHistory = jest.fn();
    let mockMatch = {
        params: {
            id: "xyz"
        }
    }
    let mockRecipe = model[0];
    
    beforeEach(() => {
        component = shallow(
            <RecipeView 
                getRecipe={ mockGetRecipeFunction } 
                deleteRecipe = { mockDeleteRecipeFunction }
                history = { mockHistory }
                match={ mockMatch } 
                recipe={ mockRecipe }  />
                
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

});