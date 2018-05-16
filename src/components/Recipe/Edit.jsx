import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { editRecipe } from '../../actions';
import Form from "../Form/Form";
import BackButton from "../Buttons/BackButton";

function convertIngredientListToForm(ingredientsList){
    return ingredientsList.join("\n");
}

function Edit({ editRecipe, history, recipe }) {        
    let initialRecipeValues = {};
    initialRecipeValues.id = recipe.id;
    initialRecipeValues.title = recipe.title;
    initialRecipeValues.servings = recipe.servings;
    initialRecipeValues.ingredients = convertIngredientListToForm(recipe.ingredients);
    return (
        <div>
            <h2>Edit Recipe</h2>
            <Form 
                formHandler={ editRecipe } 
                history={ history } 
                intialRecipeValues={ initialRecipeValues }
            />
            <BackButton />
        </div>   
    );
}

function mapStateToProps({ recipe }){
    return { recipe };
}

// export default connect(null, { editRecipe })(withRouter(Edit));
export default withRouter(connect(mapStateToProps, { editRecipe })(Edit));
