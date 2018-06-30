import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import FormTextField from 'components/Form/FormTextField';
import FormInvisibleTextField from 'components/Form/FormInvisibleTextField';
import FormTextBoxField from 'components/Form/FormTextBoxField';

// import fields from './fields';

class Form extends Component {
    componentDidMount() {
        let recipe = this.props.intialRecipeValues;
        if(recipe){
            this.props.initialize(recipe);
        }        
        // set the value individually
        // this.props.dispatch(change("recipeForm", 'anotherField', 'value'));
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
                default:
                    return (<div>ERROR!</div>);

            }
            
        });
    }
    //onSubmit={ () => this.props.addRecipe(this.props.formValues, this.props.history) }
    render(){
        const { handleSubmit, formHandler, history } = this.props;
        return (
            <div className="form">
                <form 
                    onSubmit={ handleSubmit((values, dispatch) => {                                                
                        //must use dispatch with redux-form or it does not fire action handler
                        dispatch(formHandler(values, history));                                                  
                    }) }              
                >
                    { this.renderFields(this.props.onSubmit) }
                    
                   
                    <button 
                        className="waves-effect waves-light btn form__submit-button"
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
    _.each(fields, ({ name }) => {
        if(name === "id"){
            return errors;
        }

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
    form: "recipeForm",    
    enableReintialization: true
})(Form);