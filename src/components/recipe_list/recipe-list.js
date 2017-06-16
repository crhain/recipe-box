import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeList extends Component{
    render(){
        return (
            <div>
                <h1>Recipe List</h1>
                <Link to="/recipe/new">Create New Recipe</Link>
            </div>
        );
    }
}


export default RecipeList;