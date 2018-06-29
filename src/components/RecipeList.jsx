import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getRecipes, deleteRecipe } from "actions/";
import AddButton from "components/Buttons/AddButton";
import EditButton from "components/Buttons/EditButton";
import DeleteButton from "components/Buttons/DeleteButton";


export class RecipeList extends Component{
    
    constructor(props){
        super(props);
        this.history = this.props.history;
        this.deleteRecipe = this.props.deleteRecipe;
    }

    componentDidMount(){
        this.props.getRecipes();        
    }

    createRecipeList(){ 
        if(this.props.recipes.length > 0){
            return this.props.recipes.map((recipe, index)=> {
                return (
                    <li 
                        key={index} 
                        className="recipe-list__item"
                    >
                        <Link to={ "/recipe/" + recipe.id } className="collection-item recipe-list__item__name">{recipe.title}</Link>
                        <EditButton recipeId={ recipe.id } />
                        <DeleteButton recipeId={ recipe.id } deleteRecipe={ this.deleteRecipe } history={ this.history } />                         
                    </li>
                );
            });
        } else {
            return <li>Loading...</li>;
        }                                                            
    }

    render(){        
        return (
            <div className="recipe-list">
                <h1>Recipe List</h1>
                <AddButton />
                <div>
                    <ul className="collection">
                        {this.createRecipeList()}
                    </ul>
                </div>
                                
            </div>
        );
    }
}


function mapStateToProps({ recipes }){
    return { recipes };
}

export default withRouter(connect(mapStateToProps, { getRecipes, deleteRecipe })(RecipeList));

