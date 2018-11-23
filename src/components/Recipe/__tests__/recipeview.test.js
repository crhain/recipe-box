import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeView } from "components/Recipe/RecipeView";
import seed  from "model/seed.js";
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
    let mockRecipe = seed[0];
    
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
        expect(component.find('.recipe__image > img').length).toEqual(1); 
        expect(component.find('.recipe__servings').length).toEqual(1);
        expect(component.find('.recipe__description').length).toEqual(1);
        expect(component.find('.recipe__ingredientList').length).toEqual(1); 
    });

    it('shows a title that maches recipe passed to component as state', () => {        
        expect(component.find('.recipe__title').text()).toEqual(mockRecipe.title); 
    });

    it('shows servings that matches recipe passed to component as state', () => {        
        expect(component.find('.recipe__servings').text()).toEqual('Servings: ' + mockRecipe.servings); 
    });

    it('shows a description that matches recipe passed to component as state', () => {        
        expect(component.find('.recipe__description').text()).toEqual(mockRecipe.description); 
    });

    it('shows a list of ingredient li elements with one element per ingredient', () => {
        
        let ingredientListElements = component.find('.recipe__ingredient');                     
        expect(ingredientListElements.length).toEqual(mockRecipe.ingredients.length);                
    });

    it('shows a list of igredient li elements that show the text for each ingredient passed from state', () =>{
        let ingredientListElements = component.find('.recipe__ingredient');        
        let ingredients = mockRecipe.ingredients;
        expect(ingredientListElements.everyWhere(
            (el, i) => { 
                let ingredientMatchText = ingredients[i]["quantity"] + " " + ingredients[i]["measure"] + " " + ingredients[i]["ingredient"];                                
                return el.text() === ingredientMatchText;
            })                        
        ).toEqual(true);
    });

    

    it('shows a list of instruction li elements that show the text for each instruction from state', () =>{            
        let instructionListElements = component.find('.recipe__instruction');        
        let instructions = mockRecipe.preparation;
        expect(instructionListElements.length).toEqual(mockRecipe.preparation.length);                
        expect(instructionListElements.everyWhere(
            (el, i) => { 
                let instructionMatchText = i + 1 + ". " + instructions[i];  
                console.log(el.text() + " = " + instructionMatchText);                              
                return el.text() === instructionMatchText;
            })                        
        ).toEqual(true);
    });
});