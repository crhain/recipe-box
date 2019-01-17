// @nots-check
import React from 'react';
import { Field } from 'redux-form';

/************************************************************************************ 
  renderQuantityInput - function to render quantity input
    input = inputs from fieldArray object
    label = label from fieldArray object
    meta -> error = error information from fieldArray object
    meta -> submitFailed = boolean indicating if submit was successful or not
*************************************************************************************/
const renderQuantityInput = function({
  input,
  label,
  meta: { error, submitFailed }
}) {
  return (
    <div className="input-field ingredient-entry__quantity-input col s1">
      <input {...input} type="number" placeholder={label} />
      <div
        className="recipe-form__error-field"
        style={{ marginBottom: '20px', color: 'red' }}
      >
        {submitFailed && error}
      </div>
    </div>
  );
};

/************************************************************************************ 
 rendermeasureInput - function to render measure input
   input = inputs from fieldArray object
    label = label from fieldArray object
    meta -> error = error information from fieldArray object
    meta -> submitFailed = boolean indicating if submit was successful or not
*************************************************************************************/
const renderMeasureInput = function({
  input,
  label,
  meta: { error, submitFailed }
}) {
  return (
    <div className="input-field ingredient-entry__measure-input col s2">
      <input {...input} type="text" placeholder={label} />
      <div
        className="recipe-form__error-field"
        style={{ marginBottom: '20px', color: 'red' }}
      >
        {submitFailed && error}
      </div>
    </div>
  );
};

/************************************************************************************ 
 renderIngredientInput - function to render ingredient input
    input = inputs from fieldArray object
    label = label from fieldArray object
    meta -> error = error information from fieldArray object
    meta -> submitFailed = boolean indicating if submit was successful or not
*************************************************************************************/
const renderIngredientInput = function({
  input,
  label,
  meta: { error, submitFailed }
}) {
  return (
    <div className="input-field ingredient-entry__ingredient-input col s8">
      <input {...input} type="text" placeholder={label} />
      <div
        className="recipe-form__error-field"
        style={{ marginBottom: '20px', color: 'red' }}
      >
        {submitFailed && error}
      </div>
    </div>
  );
};

/************************************************************************************ 
 RecipeFormIngredientEntry - functional component for RecipeFormIngredientEntry
 used in RecipeForm
  input = inputs from fieldArray object
  label = label from fieldArray object
  meta -> error = error information from fieldArray object
  meta -> submitFailed = boolean indicating if submit was successful or not   
*************************************************************************************/
export default function({ fields, meta: { error, submitFailed } }) {
  return (
    <div className="ingredients-field">
      <ul>
        <li>
          <button
            className="waves-effect waves-light btn ingredients-field__add-btn"
            type="button"
            onClick={() => fields.push({})}
          >
            Add Ingredient
          </button>
          <div
            className="recipe-form__error-field"
            style={{ marginBottom: '20px', color: 'red' }}
          >
            {submitFailed && error}
          </div>
        </li>
        {fields.map((ingredient, index) => (
          <li key={index} className="ingredient-entry">
            <h4>Ingredient #{index + 1}</h4>
            <div className="row">
              <div className="col s1">
                <button
                  className="waves-effect waves-light btn red ingredient-entry__delete-button"
                  onClick={() => fields.remove(index)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </div>
              <Field
                name={`${ingredient}.quantity`}
                label="Quantity"
                component={renderQuantityInput}
              />

              <Field
                name={`${ingredient}.measure`}
                label="Measure"
                component={renderMeasureInput}
              />
              <Field
                name={`${ingredient}.ingredient`}
                label="Ingredient"
                component={renderIngredientInput}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
