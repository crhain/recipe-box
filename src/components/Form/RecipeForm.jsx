import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import FormTextField from 'components/Form/FormTextField';
import FormInvisibleTextField from 'components/Form/FormInvisibleTextField';
import FormTextBoxField from 'components/Form/FormTextBoxField';
import RecipeFormIngredientEntry from 'components/Form/RecipeFormIngredientEntry';

// import fields from './fields';

class RecipeForm extends Component {
    componentDidMount() {
        let recipe = this.props.intialRecipeValues;
        if(recipe){
            this.props.initialize(recipe);
        }                
    }
    renderFields(){        
        let fields = this.props.fields || [];
        return _.map(fields, ({ label, name, type }) => {
            switch(type) {
                case "text":
                return (
                    <Field 
                        component={FormTextField}                     
                        type="text" 
                        key={name}
                        label={label} 
                        name={name} 
                    />
                );
                case "textbox":
                    return (
                        <Field 
                            component={FormTextBoxField}                     
                            key={name}
                            label={label} 
                            name={name} 
                        />
                    );
                case "invisible":
                    return (
                        <Field 
                            component={FormInvisibleTextField}
                            type="text"
                            key={name}
                            label=""
                            name={name}
                        />
                    ); 
                case "ingredient":
                    return (
                        <FieldArray
                            component={RecipeFormIngredientEntry}                            
                            type="ingredient"
                            key={name}
                            label={label}
                            name={name}
                        />
                    );

                default:
                    return (<div>ERROR!</div>);

            }
            
        });
    }    
    render(){
        const { handleSubmit, formHandler, history } = this.props;
        return (
            <div className="form">
                <form>
                    { this.renderFields() }
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
    
    _.each(fields, ({ name, required }) => {
        //fields that do not need to be filled   
        if(!required){
            return errors;
        }

        if(!values[name] || !values[name].length){
            if(name === 'ingredients'){                
                errors['ingredients'] = 'At least one ingredient must be entered';
            } else {
                errors[name] = "You must provide a value";
            }            
        } else {
            if(name === 'ingredients'){
                _.each(values['ingredients'], (ingredient) => {
                    //???
                });
            }
        }
    });   
    return errors;    
}

//wire up redux Form to component using reduxForm 
//reducer provided by reddux-form
export default reduxForm({
    validate,
    form: "recipeForm",    
    enableReintialization: true
})(RecipeForm);