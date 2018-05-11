import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import FormTextField from './FormTextField';
import FormTextBoxField from './FormTextBoxField';

import fields from './fields';

class Form extends Component {
    renderFields(){        
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
                default:
                    return (<div>ERROR!</div>);

            }
            
        });
    }
    //onSubmit={ () => this.props.addRecipe(this.props.formValues, this.props.history) }
    render(){
        const { handleSubmit, formHandler, history } = this.props;
        return (
            <div>
                <form 
                    onSubmit={ handleSubmit((values, dispatch) => {                                                
                        //must use dispatch with redux-form or it does not fire action handler
                        dispatch(formHandler(values, history));                                                  
                    }) }              
                >
                    { this.renderFields(this.props.onSubmit) }
                    
                   
                    <button 
                        className="waves-effect waves-light btn"
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
function validate(values){
    const errors = {};    
    _.each(fields, ({ name }) => {
        if(!values[name]){
            errors[name] = "You must provide a value";
        }
    });
    return errors;    
}

//wire up redux Form to component using reduxForm 
//reducer provided by reddux-form
export default reduxForm({
    validate,
    form: "recipeForm"
})(Form);