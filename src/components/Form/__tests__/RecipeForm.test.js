import React from "react";
import { mount, shallow } from "enzyme";
import RecipeForm from "components/Form/RecipeForm";
import RecipeFormIngredientEntry from "components/Form/RecipeFormIngredientEntry";
import RecipeFormInstructionEntry from "components/Form/RecipeFormInstructionEntry";
import { Root } from "components/Root";

let component;
let meta = { error: null, touched: false };
const mockFormHandler = jest.fn();
const mockHistory = [];
const input = {};

describe("RecipeForm", () => {
  beforeEach(() => {
    component = mount(
      <Root>
        <RecipeForm formHandler={mockFormHandler} history={mockHistory} />
      </Root>
    );
  });

  it("renders correctly", () => {
    expect(component.exists()).toEqual(true);
  });

  it("renders a id input field with correct components", () => {
    let element = component.find("div.form__id-field");
    expect(element.length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
  });

  it("renders a title input field with correct components", () => {
    let element = component.find("div.form__title-field");
    expect(element.length).toEqual(1);
    expect(element.find("label").length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders a description input field", () => {
    let element = component.find("div.form__description-field");
    expect(element.length).toEqual(1);
    expect(element.find("label").length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders an image input field", () => {
    let element = component.find("div.form__image-field");
    expect(element.length).toEqual(1);
    expect(element.find("label").length).toEqual(1);
    expect(element.find("input[type='text']").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders a servings input field", () => {
    let element = component.find("div.form__servings-field");
    expect(element.length).toEqual(1);
    expect(element.find("label").length).toEqual(1);
    expect(element.find("input[type='number']").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders an ingredients field", () => {
    let element = component.find("div.form__ingredients-field");
    expect(element.length).toEqual(1);
    expect(element.find("button.form_ingredient-add-btn").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders an instructions field", () => {
    let element = component.find("div.form__instructions-field");
    expect(element.length).toEqual(1);
    expect(element.find("button.form_instructions-add-btn").length).toEqual(1);
    expect(element.find("div.form__error-field").length).toEqual(1);
  });

  it("renders a submit button", () => {
    let element = component.find("button.form__submit-button");
    expect(element.length).toEqual(1);
  });
});
