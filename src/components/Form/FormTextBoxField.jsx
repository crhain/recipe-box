// SampleFormField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {    
    return (
        <div>
            <label>{label}</label>
            <textarea 
                className="form__text-box"
                {...input} 
                style={{ marginBottom: '5px' }}
            >
            </textarea> 
            <div style={{ marginBottom: '20px', color: 'red' }}>  
                {touched && error} 
            </div>    
        </div>
    );
};