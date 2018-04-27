import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, deleteRecipe } from "../../actions";



export class RecipeView extends Component{
    componentWillMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                            
    }

    constructor(props){
        super(props);                
        this.recipe = null; 
        this.handleDeleteClick = this.handleDeleteClick.bind(this);    
        this.history = this.props.history;   
    }

    renderIngredients(){
        let ingredients = "";

        if(this.props.recipe.ingredients) {
            ingredients = this.props.recipe.ingredients.map( (ingredient, index) => <li key={ index }>{ ingredient }</li> );            
        }

        return ingredients;
    }

    handleDeleteClick(){      
        this.props.deleteRecipe(this.props.recipe.id, this.history);        
    }

    render(){
        
        return (
            <div>
                <h1>{ this.props.recipe ? this.props.recipe.title : "" }</h1>                
                <div>
                    
                </div>
                <Link className="waves-effect waves-light btn" style={{marginRight: '1rem'}} to="/recipe/1555/edit">Edit Recipe</Link>
                <button 
                    onClick={ this.handleDeleteClick }
                    className="waves-effect waves-light btn" 
                    style={{marginRight: '1rem'}}

                >
                        Delete Recipe
                </button>
                <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
                <div>
                    <h3>Ingredients:</h3>
                    <ol>
                        { this.renderIngredients() }
                    </ol>
                </div>
            </div>
        );
    }
    //hello    
}


function mapStateToProps({ recipe }){
    return { recipe };
}

export default withRouter(connect(mapStateToProps, { getRecipe, deleteRecipe })(RecipeView));

