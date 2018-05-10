import React from "react";
import { Link } from 'react-router-dom';
import Form from "../Form/Form";
import BackButton from "../Buttons/BackButton";

 function New({ addRecipe, history }){            
    
    return (        
        <div>
            <h1>Create A New Recipe</h1>        
            <Form />
            <BackButton />
        </div>        
    );
    
        
}

export default New;
