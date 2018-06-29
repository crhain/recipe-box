import React, { Component } from "react";

export default class DeleteButton extends Component{

    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.recipeId = this.props.recipeId;        
        this.history = this.props.history;
        this.deleteRecipe = this.props.deleteRecipe;
    }

    handleDeleteClick(){      
        this.deleteRecipe(this.recipeId, this.history);        
    }

    render(){
        return (
            <button 
                onClick={ this.handleDeleteClick }
                className="waves-effect waves-light btn delete-button" 
                style={{marginRight: '1rem'}}
    
            >
                    <i className="material-icons">delete</i>
            </button>
        );
    }
        
}