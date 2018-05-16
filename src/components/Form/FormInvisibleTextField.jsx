// SampleFormField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {    
    return (
        <div>           
            <input {...input} style={{ marginBottom: '5px', display: 'none' }} />             
        </div>
    );
};