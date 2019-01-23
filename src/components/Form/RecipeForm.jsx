// @nots-check
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import RecipeFormIngredientEntry from 'components/Form/RecipeFormIngredientEntry';
import RecipeFormInstructionEntry from 'components/Form/RecipeFormInstructionEntry';

/**
 * @description function to render erorr field sub component
 * @param {Object} error - represents reduxForm error
 * @param {Boolean} touched - flag to indicate if component was touched
 * @return {*} jsx component
 */
const renderErrorField = function(error, touched) {
  return (
    <div
      className="recipe-form__error-field"
      style={{ marginBottom: '20px', color: 'red' }}
    >
      {touched && error}
    </div>
  );
};

/**
 * @description function to render hidden id field component
 * @param {Object} param0 - input comes from object passed from reduxForm
 * @return {*} jsx component
 */
const renderIdField = function({ input }) {
  return (
    <div className="recipe-form__id-field">
      <input
        {...input}
        type="text"
        style={{ marginBottom: '5px', display: 'none' }}
      />
    </div>
  );
};

/**
 * @description function to render title field component
 * @param {Object} param0 - object passed from reduxForm
 * @return {*} jsx component
 */
const renderTitleField = function({ input, label, meta: { error, touched } }) {
  return (
    <div className="recipe-form__title-field">
      <label>{label}</label>
      <input {...input} type="text" style={{ marginBottom: '5px' }} />
      {renderErrorField(error, touched)}
    </div>
  );
};

/**
 * @description function to render description field component
 * @param {Object} param0
 * @return {*} jsx component
 */
const renderDescriptionField = function({
  input,
  label,
  meta: { error, touched }
}) {
  return (
    <div className="recipe-form__description-field">
      <label>{label}</label>
      <input {...input} type="text" style={{ marginBottom: '5px' }} />
      {renderErrorField(error, touched)}
    </div>
  );
};

/**
 * @description function to render image url field component
 * @param {Object} param0
 * @return jsx component
 */
const renderImageField = function({ input, label, meta: { error, touched } }) {
  return (
    <div className="recipe-form__image-field">
      <label>{label}</label>
      <input {...input} type="text" style={{ marginBottom: '5px' }} />
      {renderErrorField(error, touched)}
    </div>
  );
};

/**
 * @description function to render servings field component
 * @param {Object} param0
 * @return {*} jsx object
 */
const renderServingsField = function({
  input,
  label,
  meta: { error, touched }
}) {
  return (
    <div className="recipe-form__servings-field col s1">
      <label>{label}</label>
      <input {...input} type="number" />
      {renderErrorField(error, touched)}
    </div>
  );
};

/**
 * @description React class component for form used by New and Edit components
 * @extends Component
 */
class RecipeForm extends Component {
  /**
   * @description React lifecycle method that runs after component is mounted
   */
  componentDidMount() {
    let recipe = this.props.intialRecipeValues;
    if (recipe) {
      this.props.initialize(recipe);
    }
  }

  /**
   * @description method to render component
   * @return {*} jsx component
   */
  render() {
    const { handleSubmit, formHandler, history } = this.props;
    return (
      <div className="row recipe-form">
        <form className="col s12">
          <Field component={renderIdField} label="id" name="id" />
          <div className="row">
            <Field
              component={renderTitleField}
              label="Recipe Title"
              name="title"
            />
          </div>
          <div className="row">
            <Field
              component={renderDescriptionField}
              label="Recipe Description"
              name="description"
            />
          </div>
          <div className="row">
            <Field
              component={renderImageField}
              label="Recipe Image URL"
              name="image"
            />
          </div>
          <div className="row">
            <Field
              component={renderServingsField}
              label="Recipe Servings"
              name="servings"
            />
          </div>
          <div className="row">
            <FieldArray
              component={RecipeFormIngredientEntry}
              label="Recipe Ingredients"
              name="ingredients"
            />
          </div>
          <div className="row">
            <FieldArray
              component={RecipeFormInstructionEntry}
              label="Recipe Instructions"
              name="instructions"
            />
          </div>

          <button
            className="waves-effect waves-light btn form__submit-button"
            onClick={handleSubmit(values => formHandler(values, history))}
            style={{ marginBottom: '20px' }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

/**
 * @description function used by Redux Form to validate fields on form
 * @param {Object} values - object that contains values for all fields in form
 * @return {Object} errors object with any validation errors found on form
 */
const validate = function(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  if (!values.servings) {
    errors.servings = 'Required';
  }

  if (!values.ingredients || !values.ingredients.length) {
    errors.ingredients = { _error: 'At least one ingredient must be entered' };
  } else {
    const ingredientsArrayErrors = [];
    values.ingredients.forEach((ingredient, ingredientIndex) => {
      const ingredientErrors = {};
      if (!ingredient || !ingredient.quantity) {
        ingredientErrors.quantity = 'Required';
        ingredientsArrayErrors[ingredientIndex] = ingredientErrors;
      }

      if (!ingredient || !ingredient.measure) {
        ingredientErrors.measure = 'Required';
        ingredientsArrayErrors[ingredientIndex] = ingredientErrors;
      }

      if (!ingredient || !ingredient.ingredient) {
        ingredientErrors.ingredient = 'Required';
        ingredientsArrayErrors[ingredientIndex] = ingredientErrors;
      }
    });
    if (ingredientsArrayErrors.length) {
      errors.ingredients = ingredientsArrayErrors;
    }
  }

  if (!values.instructions || !values.instructions.length) {
    errors.instructions = {
      _error: 'At least one instruction must be entered'
    };
  } else {
    const instructionsArrayErrors = [];
    values.instructions.forEach((instruction, instructionIndex) => {
      if (!instruction || !instruction.length) {
        instructionsArrayErrors[instructionIndex] = 'Required';
      }
    });
    if (instructionsArrayErrors.length) {
      errors.instructions = instructionsArrayErrors;
    }
  }

  return errors;
};

//Export a reduxForm using RecipeForm component
export default reduxForm({
  validate,
  form: 'recipeForm',
  enableReintialization: true
})(RecipeForm);
