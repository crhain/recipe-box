import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeNew extends Component{
    render(){
        return (
            <div>
                <h1>Create A New Recipe</h1>
                <Link to="/">Back To Listing</Link>
            </div>
        );
    }
}


export default RecipeNew;