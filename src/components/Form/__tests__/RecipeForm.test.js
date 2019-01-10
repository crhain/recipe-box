import React from 'react';
import { mount, shallow } from 'enzyme';
import { reduxForm, Field, FieldArray } from 'redux-form';
import RecipeForm from 'components/Form/RecipeForm';
import RecipeFormIngredientEntry from 'components/Form/RecipeFormIngredientEntry';
import RecipeFormInstructionEntry from 'components/Form/RecipeFormInstructionEntry';
import { Root } from 'components/Root';

let component;
const mockFormHandler = jest.fn();
const mockHistory = [];

describe('RecipeForm', () => {
  beforeEach(() => {
    component = mount(
      <Root>
        <RecipeForm formHandler={mockFormHandler} history={mockHistory} />
      </Root>
    );
  });

  it('renders correctly', () => {
    expect(component.exists()).toEqual(true);
  });

  it('renders a id input field with correct components', () => {
    let element = component.find('div.recipe-form__id-field');
    expect(element.length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
  });

  it('renders a title input field with correct components', () => {
    let element = component.find('div.recipe-form__title-field');
    expect(element.length).toEqual(1);
    expect(element.find('label').length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find('div.recipe-form__error-field').length).toEqual(1);
  });

  it('renders a description input field', () => {
    let element = component.find('div.recipe-form__description-field');
    expect(element.length).toEqual(1);
    expect(element.find('label').length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find('div.recipe-form__error-field').length).toEqual(1);
  });

  it('renders an image input field', () => {
    let element = component.find('div.recipe-form__image-field');
    expect(element.length).toEqual(1);
    expect(element.find('label').length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find('div.recipe-form__error-field').length).toEqual(1);
  });

  it('renders a servings input field', () => {
    let element = component.find('div.recipe-form__servings-field');
    expect(element.length).toEqual(1);
    expect(element.find('label').length).toEqual(1);
    expect(element.find("input[type='number']").length).toEqual(1);
    expect(element.find('div.recipe-form__error-field').length).toEqual(1);
  });

  it('renders an ingredients field', () => {
    let element = component.find('div.ingredients-field');
    expect(element.length).toEqual(1);
    expect(element.find('button.ingredients-field__add-btn').length).toEqual(1);
    expect(element.find('div.recipe-form__error-field').length).toEqual(1);
  });

  it('renders an instructions field', () => {
    let element = component.find('div.form__instructions-field');
    expect(element.length).toEqual(1);
    expect(element.find('button.form_instructions-add-btn').length).toEqual(1);
    expect(element.find('div.form__error-field').length).toEqual(1);
  });

  it('renders a submit button', () => {
    let element = component.find('button.form__submit-button');
    expect(element.length).toEqual(1);
  });
});

let mockData = {
  fields: [{}],
  meta: {
    error: {},
    submitFailed: false
  }
};

//   it('renders for each ingriedent a h4, a quantity field, a measure field, and an igredient field, and a delete button', () => {
//     let element = component.find('li.form__ingredient-entry');
//     expect(element.find('h4').length).toEqual(1);
//     expect(element.find('button.delete-button').length).toEqual(1);
//     expect(
//       element.find('div.recipe-ingredient__quantity-input').length
//     ).toEqual(1);
//     expect(element.find('div.recipe-ingredient__measure-input').length).toEqual(
//       1
//     );
//     expect(
//       element.find('div.recipe-ingredient__ingredient-input').length
//     ).toEqual(1);
//   });
// });
