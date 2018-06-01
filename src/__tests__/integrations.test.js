import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'components/Root';
import App from 'components/App';

let component;

describe('RecipeBox App', () => {
  
    describe('Recipes View', () => {
        beforeEach(() => {
            component = mount(
                <Root>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </Root>
            );
        });

        it('should link to associated recipe view when clicking on recipe name', () => {
        
        });

        
        it('should display new recipe page when clicking on new button', () => {
            // let button = component.find('EditButton');
            // button.simulate('click');    
        });

    });

    describe('Recipe View', () => {
        it('should display correct recipe view for recipe associated with page', () => {
    
        });

        it('should allow user to click on delete button and remove recipe', () => {
    
        });

        it('should allow user to click on edit button and take user to edit page', () => {
    
        });

        it('should allow user to click on back button and return to recipe list', () => {

        });

    });

    describe('New Recipe', () => {
        it('should allow user to input new recipe and add new recipe by clicking on submit button', () => {

        });

        it('should allow user to return to recipe list by clicking on back button', () => {

        });
    });

    describe('Edit Recipe', () => {
        it('should display correct recipe data in form', () => {

        });

        it('should update recipe with new data when submit is clicked', () => {

        });

        it('should allow user to return to recipe list by clicking on back button', () => {

        });
    });
});

