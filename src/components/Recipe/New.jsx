import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addRecipe } from '../../actions';
import Form from "../Form/Form";
import BackButton from "../Buttons/BackButton";

 function New({ addRecipe, history }){            
    
    return (        
        <div>
            <h1>Create A New Recipe</h1>        
            <Form formHandler={ addRecipe } history={ history }/>
            <BackButton />
        </div>        
    );
    
        
}

export default connect(null, { addRecipe })(withRouter(New));
