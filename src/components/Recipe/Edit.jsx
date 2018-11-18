import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, editRecipe } from "actions/";
import fields from "components/Form/fields";
import RecipeForm from "components/Form/RecipeForm";
import BackButton from "components/Buttons/BackButton";


export class Edit extends Component{
    componentDidMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                                
    }
  
    constructor(props){
        super(props);                           
        this.recipeId = this.props.match.params.id;   
        this.history = this.props.history;   
        this.initialRecipeValues = {};        
    }
        
    render(){
        
        if(this.props.selectedRecipe.id){
            this.initialRecipeValues.id = this.props.selectedRecipe.id;
            this.initialRecipeValues.title = this.props.selectedRecipe.title;
            this.initialRecipeValues.description = this.props.selectedRecipe.description;
            this.initialRecipeValues.image = this.props.selectedRecipe.image;
            this.initialRecipeValues.servings = this.props.selectedRecipe.servings;
            this.initialRecipeValues.ingredients = this.props.selectedRecipe.ingredients;    
        }
        
        return (
            <div className="recipe-edit">
                <h1 className="recipe-edit__heading">Edit: { this.props.selectedRecipe ? this.props.selectedRecipe.title : "" }</h1>                
                <div>
                    
                </div>                
                <BackButton history={ this.history }/>
                <div className="recipe-edit__form">
                    <RecipeForm 
                        fields={fields}
                        formHandler={ this.props.editRecipe } 
                        history={ this.history }
                        intialRecipeValues={ this.initialRecipeValues ? this.initialRecipeValues : "" }
                    />
                </div>
            </div>
        );
    }
    
}


function mapStateToProps({ selectedRecipe }){
    return { selectedRecipe };
}

export default withRouter(connect(mapStateToProps, { getRecipe, editRecipe })(Edit));


