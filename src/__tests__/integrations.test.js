import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import moxios from 'moxios';
import App from 'components/App';

describe('Integration Tests', () => {
    describe('RecipeList', () => {
        let component;
        beforeEach(() => {
            component = mount(                
                
                <MemoryRouter initialEntries={['/']} initialIndex={0}>                                               
                    <App />                                                                                   
                </MemoryRouter>    
                                         
            );
            
        });

        it('should should render application', () => {            
            expect(component.exists()).toEqual(true);
        });
    
        it('should should render Recipe List when going to root route', () => {
            expect(component.find('RecipeList')).toHaveLength(1);
        });
    
        it('should have title: Recipe List', () => {
            expect(component.find('h1').text()).toEqual('Recipe List');
        });
    
        it('should link to new recipe component when clicking on the new button', (done) => {           
           component.find('AddButton').simulate('click', {button: 0});
           moxios.wait(
            () => {                
                expect(component.find('h1').text()).toEqual('Create A New Recipe');

                //kludge code because MemoryRouter will not reset
                component.find('.back-button').simulate('click', {button: 0});    
                done();
            }               
           );
           
        });

        it('should link to recipe view for a recipe when clicking on link for that recipe', (done) => {                 
            let recipe = component.find('ul > li > Link').first();                        
            recipe.simulate('click', {button: 0});
            moxios.wait(
                () => {                    
                    expect(component.find('h1').text()).toEqual('Beef Strogonoff');
                    //kludge code because MemoryRouter will not reset
                    component.find('.back-button').simulate('click', {button: 0});  
                    done();
                }
            );
        });

        it('should link to edit view for recipe when clicking on edit button for a recipe', (done) => {
            let recipe = component.find('.recipe-list__item').first();
            let recipeEditButton = recipe.find('EditButton');
            recipeEditButton.simulate('click', {button: 0});
            moxios.wait(
                () => {
                    expect(component.find('h1').text()).toEqual('Edit: Beef Strogonoff');
                    component.find('.back-button').simulate('click', {button: 0});  
                    done();
                }
            );
        });

        it('should delete a recipe when clicking on delete button for a recipe', () => {
            let recipe = component.find('.recipe-list__item').first();
            let recipeDeleteButton = recipe.find('DeleteButton');
            recipeDeleteButton.simulate('click', {button: 0});
            moxios.wait(
                () => {
                    let recipeName = component.find('.recipe-list__item__name').first();
                    expect(recipeName.text()).toEqual('Lasagna');                       
                    done();
                }
            );
        });

    });
    

    describe('Recipe View', () => {
        let component;
        beforeEach(() => {
            component = mount(                                
                <MemoryRouter initialEntries={['/recipe/lasagna']} initialIndex={0}>                                               
                    <App />                                                                                   
                </MemoryRouter>                                             
            );
            
        });

        it('should render Recipe View correctly', (done) => {   
            let recipe = component.find('ul > li > Link').first();                        
            recipe.simulate('click', {button: 0});
            moxios.wait(
                () => {
                    let title = component.find('h1').text();
                    console.log(title);
                    expect(component.find('h1').text()).toEqual('Lasagna');
                    done();
                }
            );                               
            
        });
          
        it('should display edit recipe page when clicking on edit button', () => {
            component.find('.edit-button').simulate('click', {button: 0});
            moxios.wait(
             () => {                                 
                 expect(component.find('h1').text()).toEqual('Edit: Lasagna');
                 //kludge code because MemoryRouter will not reset
                 component.find('.back-button').simulate('click', {button: 0});                                    
                 done();
             }               
            );
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

