import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, deleteRecipe } from "actions/";
import BackButton from "components/Buttons/BackButton";
import EditButton from "components/Buttons/EditButton";
import DeleteButton from "components/Buttons/DeleteButton";



export class RecipeView extends Component{
    componentDidMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                                
    }
  
    constructor(props){
        super(props);                
        this.recipe = null;      
        this.recipeId = this.props.match.params.id;   
        this.history = this.props.history;   
    }

    renderIngredients(){
        let ingredients = "";

        if(this.props.selectedRecipe.ingredients) {
            ingredients = this.props.selectedRecipe.ingredients.map( (ingredient, index) => <li className="collection-item recipe__ingredient" key={ index }>{ ingredient }</li> );            
        }

        return ingredients;
    }
    
    render(){
        
        return (
            <div className="recipe">
                <h1 className="recipe__title">{ this.props.selectedRecipe ? this.props.selectedRecipe.title : "" }</h1>                
                <div className="recipe__image">
                    <img src={this.props.selectedRecipe ? this.props.selectedRecipe.image : ""} />    
                </div>
                <EditButton recipeId={ this.recipeId }/>
                <DeleteButton recipeId={ this.recipeId } deleteRecipe={ this.props.deleteRecipe } history={ this.history } />                
                <BackButton history={ this.history }/>
                <div>
                    <p className="recipe__description">{this.props.selectedRecipe ? this.props.selectedRecipe.description : ""}</p>
                    <h3 className="recipe__servings">Servings: <span>{this.props.selectedRecipe ? this.props.selectedRecipe.servings : ""}</span></h3> 
                    <div className="recipe__ingredientList">
                        <h3 className="collection-header">Ingredients</h3>   
                        <ul className="collection with-header">                                                
                            { this.renderIngredients() }
                        </ul>
                    </div>                    
                </div>
            </div>
        );
    }
    
}


function mapStateToProps({ selectedRecipe }){
    return { selectedRecipe };
}

export default withRouter(connect(mapStateToProps, { getRecipe, deleteRecipe })(RecipeView));

