import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {    
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