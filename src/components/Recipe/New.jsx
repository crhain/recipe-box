import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addRecipe } from "actions/";
import RecipeForm from "components/Form/RecipeForm";
import BackButton from "components/Buttons/BackButton";
import { store } from 'components/Root';
import { flashMessage } from 'redux-flash';

 export class New extends Component {
    constructor(props){
        super(props);
        this.history = this.props.history;
        this.addRecipeHandler = this.props.addRecipe;
    }

    addRecipeHandler(values, history){        
        try {
            store.dispatch(this.props.addRecipe(values, history));
        } catch(error){
            store.dispatch(flashMessage(error));
        }                  
    }

    render(){
        let history = this.props.history;        
        return (        
            <div className="recipe-new container">
                <h1 className="recipe-new__heading">Create A New Recipe</h1>        
                <RecipeForm                 
                    formHandler={ this.addRecipeHandler } 
                    history={ history } 
                />
                <BackButton history={ this.history }/>
            </div>        
        );
    }
 };
 
export default withRouter(connect(null, { addRecipe })(New));


