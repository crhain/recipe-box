import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, editRecipe } from "actions/";
import fields from "components/Form/fields";
import Form from "components/Form/Form";
import BackButton from "components/Buttons/BackButton";


export class Edit extends Component{
    componentDidMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                                
    }
  
    constructor(props){
        super(props);                
        // this.recipe = null;      
        this.recipeId = this.props.match.params.id;   
        this.history = this.props.history;   
        this.initialRecipeValues = {};

    }

    convertIngredientListToForm(ingredientsList){        
        return ingredientsList ? ingredientsList.join("\n") : "";
    }

    render(){
        
        if(this.props.recipe.id){
            this.initialRecipeValues.id = this.props.recipe.id;
            this.initialRecipeValues.title = this.props.recipe.title;
            this.initialRecipeValues.servings = this.props.recipe.servings;
            this.initialRecipeValues.ingredients = this.convertIngredientListToForm(this.props.recipe.ingredients);    
        }

        return (
            <div>
                <h1>Edit: { this.props.recipe ? this.props.recipe.title : "" }</h1>                
                <div>
                    
                </div>                
                <BackButton />
                <div>
                    <Form 
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


function mapStateToProps({ recipe }){
    return { recipe };
}

export default withRouter(connect(mapStateToProps, { getRecipe, editRecipe })(Edit));


