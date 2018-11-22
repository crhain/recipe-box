import React from 'react';
import { Field } from 'redux-form';
import FormTextField from 'components/Form/FormTextField';

const quantityInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s1">        
        <input {...input} type="number" placeholder={label} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

const measureInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s2">        
        <input {...input} type="text" placeholder={label} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

const ingredientInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s8">        
        <input {...input} type="text" placeholder={label} /> 
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
                    <div className="row">
                        <h4 className="col s8">Ingredient #{index + 1}</h4>
                                         
                    </div>
                                         
                    <div className="row">
                        <div className="col s1">
                            <button
                                className="waves-effect waves-light btn red delete-button"
                                onClick={ () => fields.remove(index) }                              
                            >
                                <i className="material-icons">delete</i>
                            </button>
                        </div>       
                        <Field 
                            name={`${ingredient}.quantity`}
                            label="Quantity"                        
                            component={quantityInput}                                           
                        />

                        <Field 
                            name={`${ingredient}.measure`}
                            label="Measure"                        
                            component={measureInput}                                           
                        />
                        <Field 
                            name={`${ingredient}.ingredient`}
                            label="Ingredient"
                            component={ingredientInput}                                           
                        />
                    </div>
                     
                </li>                
            ) )}
        </ul>     
    );
};