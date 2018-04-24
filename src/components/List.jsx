import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class List extends Component{
    createRecipeList(){
        const listing = this.props.recipes ? 
                        this.props.recipes.map((recipe, index)=>{
                            return <Link to="/recipe/1555"><li key={index}>{recipe.title}</li></Link>;
                        }) :
                        <li>Loading...</li>;

        return listing;
    }

    render(){
        console.log(this.props.recipes);
        return (
            <div>
                <h1>Recipe List</h1>
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

export default connect(mapStateToProps)(List);

