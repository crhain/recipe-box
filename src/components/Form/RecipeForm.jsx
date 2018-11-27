import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import RecipeFormTextField from 'components/Form/RecipeFormTextField';
import RecipeFormInvisibleTextField from 'components/Form/RecipeFormInvisibleTextField';
import RecipeFormTextBoxField from 'components/Form/RecipeFormTextBoxField';
import RecipeFormIngredientEntry from 'components/Form/RecipeFormIngredientEntry';
import RecipeFormInstructionEntry from 'components/Form/RecipeFormInstructionEntry';

// import fields from './fields';

const renderIdField = ({ input } ) => {    
    return (
        <div className="form__text-field--invisible">           
            <input {...input} style={{ marginBottom: '5px', display: 'none' }} />             
        </div>
    );
};

const renderTitleField = ({ input, label, meta: { error, touched } }) => {    
    return (
        <div className="form__text-field">
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} /> 
            <div style={{ marginBottom: '20px', color: 'red' }}>  
                {touched && error} 
            </div>    
        </div>
    );
};

const renderDescriptionField = ({ input, label, meta: { error, touched } }) => {    
    return (
        <div className="form__text-field">
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} /> 
            <div style={{ marginBottom: '20px', color: 'red' }}>  
                {touched && error} 
            </div>    
        </div>
    );
};

const renderImageField = ({ input, label, meta: { error, touched } }) => {    
    return (
        <div className="form__text-field">
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} /> 
            <div style={{ marginBottom: '20px', color: 'red' }}>  
                {touched && error} 
            </div>    
        </div>
    );
};

const renderServingsField = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="col s1">   
        <label>{label}</label>     
        <input {...input} type="number" /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

class RecipeForm extends Component {
    componentDidMount() {
        let recipe = this.props.intialRecipeValues;
        if(recipe){
            this.props.initialize(recipe);
        }                
    }
            
    render(){
        const { handleSubmit, formHandler, history } = this.props;
        return (
            <div className="row">
                <form className="col s12">
                    <Field 
                        component={ renderIdField }
                        label="id"
                        name="id"                        
                    />
                    <div className="row">
                        <Field 
                            component={ renderTitleField }                                                                         
                            label="Recipe Title" 
                            name="title"
                        />
                    </div>
                    <div className="row">
                        <Field 
                            component={ renderDescriptionField }                                                                         
                            label="Recipe Description" 
                            name="description"                            
                        />
                    </div>
                    <div className="row">
                        <Field 
                            component={ renderImageField }                                                                         
                            label="Recipe Image URL" 
                            name="image"                            
                        />
                    </div>
                    <div className="row">
                        <Field 
                            component={ renderServingsField }                                                                         
                            label="Recipe Servings" 
                            name="servings"                                                        
                        />
                    </div>
                    <div className="row">
                        <FieldArray
                            component={ RecipeFormIngredientEntry }                                                                                
                            label="Recipe Ingredients"
                            name="ingredients"                            
                        />
                    </div>
                    <div className="row">
                        <FieldArray
                            component={ RecipeFormInstructionEntry }                                                                                
                            label="Recipe Instructions"
                            name="instructions"                          
                        />
                    </div>
                    
                    <button 
                        className="waves-effect waves-light btn form__submit-button"
                        onClick={ handleSubmit((values, dispatch) => {                                                
                            //must use dispatch with redux-form or it does not fire action handler
                            dispatch(formHandler(values, history));                                                  
                        }) } 
                        style={{ marginBottom: "20px" }}
                        type="submit"                        
                    >
                        Submit                       
                    </button>                    
                    
                </form>
            </div>
        );
    }
}

//form validation function
function validate(values, form){
    const errors = {};
    const fields = form.fields;
    
    // _.each(fields, ({ name, required }) => {
    //     //fields that do not need to be filled   
    //     if(!required){
    //         return errors;
    //     }

    //     if(!values[name] || !values[name].length){
    //         if(name === 'ingredients'){                
    //             errors['ingredients'] = 'At least one ingredient must be entered';
    //         } else {
    //             errors[name] = "You must provide a value";
    //         }            
    //     } else {
    //         if(name === 'ingredients'){
    //             _.each(values['ingredients'], (ingredient) => {
    //                 //???
    //             });
    //         }
    //     }
    // });   
    return errors;    
}

//wire up redux Form to component using reduxForm 
//reducer provided by reddux-form
export default reduxForm({
    validate,
    form: "recipeForm",    
    enableReintialization: true
})(RecipeForm);