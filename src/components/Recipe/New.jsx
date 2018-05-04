// SampleNew shows SsampleForm
import React from "react";
import Form from "../Form/Form";
import { Link } from 'react-router-dom';


 function New({ addRecipe, history }){            
    
    return (        
        <div>
            <h1>Create A New Recipe</h1>        
            <Form />
            <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
        </div>        
    );
    
        
}

export default New;
