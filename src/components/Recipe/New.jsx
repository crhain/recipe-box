import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addRecipe } from "actions/";
import RecipeForm from "components/Form/RecipeForm";
import BackButton from "components/Buttons/BackButton";

 export class New extends Component {
    constructor(props){
        super(props);
        this.history = this.props.history;
    }

    render(){
        let history = this.props.history;
        let addRecipe = this.props.addRecipe;        
        return (        
            <div className="recipe-new">
                <h1 className="recipe-new__heading">Create A New Recipe</h1>        
                <RecipeForm                 
                    formHandler={ addRecipe } 
                    history={ history } 
                />
                <BackButton history={ this.history }/>
            </div>        
        );
    }
 };
 
export default withRouter(connect(null, { addRecipe })(New));


