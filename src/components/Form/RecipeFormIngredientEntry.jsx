import React from 'react';
import { Field } from 'redux-form';
import FormTextField from 'components/Form/FormTextField';

const renderField = ( { input, label, type, meta: {touched, error } }) => {
    return (<div className="form__text-field">
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {touched && error} 
        </div>    
    </div>);
};

export default ({ fields }) => {    
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
            </li>
            {fields.map( (ingredient, index) => (
                <li key={index}>
                    <button
                        className="waves-effect waves-light btn delete-button"
                        onClick={ () => fields.remove(index) }
                     >
                        <i className="material-icons">delete</i>
                     </button>
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