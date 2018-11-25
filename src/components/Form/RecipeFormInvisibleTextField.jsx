// SampleFormField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {    
    return (
        <div className="form__text-field--invisible">           
            <input {...input} style={{ marginBottom: '5px', display: 'none' }} />             
        </div>
    );
};