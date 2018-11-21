import React from 'react';
import { Field } from 'redux-form';
import FormTextField from 'components/Form/FormTextField';

const renderField = ( { input, label, meta: {error, submitFailed } }) => {
    return (<div className="form__text-field">
        <label>{label}</label>
        <input {...input} type="text" style={{ marginBottom: '5px' }} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

export default ({ fields, meta: {error, submitFailed } }) => {    
    return (
        <ul>
            <li>
                <button 
                    className="waves-effect waves-light btn"
                    type="button" 
                    onClick={ () => fields.push({}) }
                >
                    Add Ingredient
                </button>   
                <div style={{ marginBottom: '20px', color: 'red' }}>  
                    { submitFailed && error } 
                </div>               
            </li>
            {fields.map( (ingredient, index) => (
                <li key={index}>
                    <button
                        className="waves-effect waves-light btn red delete-button"
                        onClick={ () => fields.remove(index) }
                     >
                        <i className="material-icons">delete</i>
                     </button>
                     <h4>Ingredient #{index + 1}</h4>
                     <Field 
                        name={`${ingredient}.ingredient`}
                        type="text"
                        component={renderField}                                           
                     />
                </li>                
            ) )}
        </ul>     
    );
};