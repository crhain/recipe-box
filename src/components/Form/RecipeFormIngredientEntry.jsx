import React from 'react';
import { Field } from 'redux-form';
import FormTextField from 'components/Form/FormTextField';

const renderField = ( { input, label, type, meta: {touched, error } }) => {
    <div className="form__text-field">
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {touched && error} 
        </div>    
    </div>
};

export default ({ fields, input, label, meta: { error, touched } }) => {    
    return (
        <ul>
            <li>
                <button type="button" onClick={ () => fields.push({}) }>
                    Add Ingredient
                </button>                
            </li>
            {fields.map( (ingredient, index) => (
                <li key={index}>
                    <button
                        type="button"
                        title="Remove Ingredient"
                        onClick={ () => fields.remove(index) }
                     />
                     <Field 
                        name={`${ingredient}.ingredient`}
                        type="text"
                        component={renderField}
                        label="Ingredient"
                     />
                </li>                
            ) )}
        </ul>     
    );
};