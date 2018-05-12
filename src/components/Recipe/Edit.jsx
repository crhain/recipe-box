import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { editRecipe } from '../../actions';
import Form from "../Form/Form";
import BackButton from "../Buttons/BackButton";

function Edit({ editRecipe, history }) {        
    return (
        <div>
            <h2>Edit Recipe</h2>
            <Form formHandler={ editRecipe } history={ history } />
            <BackButton />
        </div>   
    );
}

// export default connect(null, { editRecipe })(withRouter(Edit));
export default withRouter(connect(null, { editRecipe })(Edit));
