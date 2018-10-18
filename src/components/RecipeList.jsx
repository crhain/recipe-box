import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getRecipes, deleteRecipe } from "actions/";
import EditButton from "components/Buttons/EditButton";
import DeleteButton from "components/Buttons/DeleteButton";
import Modal from "components/Modal";

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
                        className="recipe-list__recipe"
                    >
                        <Link to={ "/recipe/" + recipe.id } className="collection-item recipe-list__recipe__name">{recipe.title}</Link>
                        <EditButton recipeId={ recipe.id } />
                        <DeleteButton recipeId={ recipe.id } deleteRecipe={ this.deleteRecipe } history={ this.history } />                         
                    </li>
                );
            });
        } else {
            return <li></li>;
        }                                                            
    }

    render(){        
        return (            
            <div className="recipe-list">                                 
                <h1 className="recipe-list__heading">Recipe List</h1>                
                <div>
                    <ul className="collection">
                        {this.createRecipeList()}
                    </ul>
                </div>                
                <Modal acceptHandler={this.deleteRecipe} >
                    <h4>Test Modal</h4>
                    <p>Some text here</p>
                </Modal>
            </div>
        );
    }
}


function mapStateToProps({ recipes }){
    return { recipes };
}

export default withRouter(connect(mapStateToProps, { getRecipes, deleteRecipe })(RecipeList));

