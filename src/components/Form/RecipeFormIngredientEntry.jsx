import React from 'react';
import { Field } from 'redux-form';


/////////////////////////////////////////////////////////////////////////////////////
// renderQuantityInput - function to render quantity input
/////////////////////////////////////////////////////////////////////////////////////
const renderQuantityInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s1">        
        <input {...input} type="number" placeholder={label} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

/////////////////////////////////////////////////////////////////////////////////////
// rendermeasureInput - function to render measure input
/////////////////////////////////////////////////////////////////////////////////////
const renderMeasureInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s2">        
        <input {...input} type="text" placeholder={label} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

/////////////////////////////////////////////////////////////////////////////////////
// renderIngredientInput - function to render ingredient input
/////////////////////////////////////////////////////////////////////////////////////
const renderIngredientInput = ( { input, label, meta: {error, submitFailed } }) => {
    return (
    <div className="input-field col s8">        
        <input {...input} type="text" placeholder={label} /> 
        <div style={{ marginBottom: '20px', color: 'red' }}>  
            {submitFailed && error} 
        </div>    
    </div>);
};

/////////////////////////////////////////////////////////////////////////////////////
// RecipeFormIngredientEntry - functional component for RecipeFormIngredientEntry  
//                              used in RecipeForm 
/////////////////////////////////////////////////////////////////////////////////////
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
                    <h4>Ingredient #{index + 1}</h4>                     
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
                            component={renderQuantityInput}                                           
                        />

                        <Field 
                            name={`${ingredient}.measure`}
                            label="Measure"                        
                            component={renderMeasureInput}                                           
                        />
                        <Field 
                            name={`${ingredient}.ingredient`}
                            label="Ingredient"
                            component={renderIngredientInput}                                           
                        />
                    </div>
                     
                </li>                
            ) )}
        </ul>     
    );
};