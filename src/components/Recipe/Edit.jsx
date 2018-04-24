import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Edit extends Component {    
    render(){
        return (
            <div>
                <h2>Edit Recipe</h2>
                <Link className="waves-effect waves-light btn" to="/">Return to list</Link>
            </div>   
        );
    }
}

export default Edit;