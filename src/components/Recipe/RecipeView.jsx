import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, getRecipes } from "../../actions";



export class RecipeView extends Component{
    componentWillMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                            
    }

    constructor(props){
        super(props);                
        this.recipe = null;        
    }

    renderIngredients(){
        let ingredients = "";

        if(this.props.recipe.ingredients) {
            ingredients = this.props.recipe.ingredients.map( (ingredient, index) => <li key={ index }>{ ingredient }</li> );            
        }

        return ingredients;
    }

    render(){
        
        return (
            <div>
                <h1>{ this.props.recipe ? this.props.recipe.title : "" }</h1>                
                <div>
                    
                </div>
                <Link className="waves-effect waves-light btn" style={{marginRight: '1rem'}} to="/recipe/1555/edit">Edit Recipe</Link>
                <button className="waves-effect waves-light btn" style={{marginRight: '1rem'}} to="/recipe/1555/edit">Delete Recipe</button>
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

export default connect(mapStateToProps, { getRecipe })(RecipeView);

