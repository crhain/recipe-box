import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeView } from "components/Recipe/RecipeView";
import model  from "model/seed.js";
import BackButton from 'components/Buttons/BackButton';
import DeleteButton from 'components/Buttons/DeleteButton';
import EditButton from 'components/Buttons/EditButton';

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
                selectedRecipe={ mockRecipe }  />
                
        );
    });

    it('renders correctly', () => {
        expect(component.exists()).toEqual(true);
    });

    it('includes an edit button, delete button, and back button', () =>{         
       expect(component.containsMatchingElement(<EditButton />)).toEqual(true); 
       expect(component.containsMatchingElement(<DeleteButton />)).toEqual(true); 
       expect(component.containsMatchingElement(<BackButton />)).toEqual(true);        
    });

    it('includes an a h1 (title), image, h3 (servings), p.description and ul (ingredient list)', () =>{
        expect(component.find('h1').length).toEqual(1); 
        expect(component.find('.recipe-image > img').length).toEqual(1); 
        expect(component.find('.servings').length).toEqual(1);
        expect(component.find('.description').length).toEqual(1);
        expect(component.find('.ingredientList').length).toEqual(1); 
    });

    it('shows a title that maches recipe passed to component as state', () => {        
        expect(component.find('h1').text()).toEqual(mockRecipe.title); 
    });

    it('shows servings that matches recipe passed to component as state', () => {        
        expect(component.find('.servings').text()).toEqual('Servings: ' + mockRecipe.servings); 
    });

    it('shows a description that matches recipe passed to component as state', () => {        
        expect(component.find('.description').text()).toEqual(mockRecipe.description); 
    });

    it('shows a list of ingredient li elements with one element per ingredient', () => {
        
        let ingredientListElements = component.find('.ingredientList li');                        
        expect(ingredientListElements.length).toEqual(mockRecipe.ingredients.length);
        
        
    });

    it('shows a list of igredient li elements that show the text for each ingredient passed from state', () =>{
        let ingredientListElements = component.find('.ingredientList li');                        
        expect(ingredientListElements.everyWhere((el, i) => el.text() === mockRecipe.ingredients[i])).toEqual(true);
    });

    
});