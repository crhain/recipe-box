import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/';

class RecipeList extends Component{
    createRecipeList(){
        const listing = this.props.recipes ? 
                        this.props.recipes.map((recipe, index)=>{
                            return <li key={index}>{recipe.title}</li>;
                        }) :
                        <li>Loading...</li>;

        return listing;
    }

    render(){
        console.log(this.props.recipes);
        return (
            <div>
                <h1>Recipe List</h1>
                <SearchBar />                
                <Link to="/recipe/new">Create New Recipe</Link>
                <div>
                    <ul>
                        {this.createRecipeList()}
                    </ul>
                </div>
                
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps)(RecipeList);

