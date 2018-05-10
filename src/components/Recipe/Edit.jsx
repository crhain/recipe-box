import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from "../Form/Form";
import BackButton from "../Buttons/BackButton";

class Edit extends Component {    
    render(){
        return (
            <div>
                <h2>Edit Recipe</h2>
                <Form />
                <BackButton />
            </div>   
        );
    }
}

export default Edit;