import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { editRecipe, getRecipe } from 'actions/';
import fields from "components/Form/fields";
import Form from "components/Form/Form";
import BackButton from "components/Buttons/BackButton";

export class Edit extends Component{

    componentWillMount(){             
        this.props.getRecipe(this.props.match.params.id);                                                                
    }
 
    convertIngredientListToForm(ingredientsList){
        return ingredientsList.join("\n");
    }
    render(){
        const { editRecipe, history, recipe } = this.props;

        let initialRecipeValues = {};

        if(recipe){
            initialRecipeValues.id = recipe.id;
            initialRecipeValues.title = recipe.title;
            initialRecipeValues.servings = recipe.servings;
            initialRecipeValues.ingredients = this.convertIngredientListToForm(recipe.ingredients);
        }
        
        return (
            <div>
                <h2>Edit Recipe</h2>
                <Form 
                    fields={fields}
                    formHandler={ editRecipe } 
                    history={ history }
                    intialRecipeValues={ initialRecipeValues }
                />
                <BackButton />
            </div>   
        );
    }    
}

function mapStateToProps({ recipe }){
    return { recipe };
}

// export default connect(null, { editRecipe })(withRouter(Edit));
export default withRouter(connect(mapStateToProps, { editRecipe, getRecipe })(Edit));
