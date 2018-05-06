import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BackButton from "../Buttons/BackButton";

class Edit extends Component {    
    render(){
        return (
            <div>
                <h2>Edit Recipe</h2>
                <BackButton />
            </div>   
        );
    }
}

export default Edit;