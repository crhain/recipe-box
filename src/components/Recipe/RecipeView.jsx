import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, deleteRecipe } from "../../actions";
import BackButton from "../Buttons/BackButton";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";



export class RecipeView extends Component{
    componentWillMount(){             
        this.props.getRecipe(this.props.match.params.id); 
        console.log("recipe view is mounting");                                                           
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
            ingredients = this.props.recipe.ingredients.map( (ingredient, index) => <li className="collection-item" key={ index }>{ ingredient }</li> );            
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
                <EditButton />
                <DeleteButton handleDeleteClick={ this.handleDeleteClick } />                
                <BackButton />
                <div>
                    
                    <ul className="collection with-header">
                        <li className="collection-header"><h3>Ingredients</h3></li>
                        { this.renderIngredients() }
                    </ul>
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

