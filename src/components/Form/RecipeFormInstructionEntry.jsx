// @ts-check
import React from 'react';
import { Field } from 'redux-form';

/**
 * @description function to render instruction input component
 * @callback renderInstructionInput
 * @param {*} param0
 * @return {*} jsx element
 */
const renderInstructionInput = function({
  input,
  label,
  meta: { error, submitFailed }
}) {
  return (
    <div className="input-field instruction-entry__input col s11">
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

/**
 * @description functional component for instruction entry field
 used in RecipeForm
 * @callback renderRecipeFormInstructionEntry
 * @param {*} param0 
 * @return {*} jsx element
 */
const renderRecipeFormInstructionEntry = function({
  fields,
  meta: { error, submitFailed }
}) {
  return (
    <div className="instructions-field">
      <ul>
        <li>
          <button
            className="waves-effect waves-light btn instructions-field__add-btn"
            type="button"
            onClick={() => fields.push()}
          >
            Add Instruction
          </button>
          <div
            className="recipe-form__error-field"
            style={{ marginBottom: '20px', color: 'red' }}
          >
            {submitFailed && error}
          </div>
        </li>
        {fields.map((instruction, index) => (
          <li className="instruction-entry" key={index}>
            <h4>Instruction #{index + 1}</h4>
            <div className="row">
              <div className="col s1">
                <button
                  className="waves-effect waves-light btn red instruction-entry__delete-button"
                  onClick={() => fields.remove(index)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </div>
              <Field
                name={instruction}
                label="Instruction"
                //@ts-ignore
                component={renderInstructionInput}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default renderRecipeFormInstructionEntry;
