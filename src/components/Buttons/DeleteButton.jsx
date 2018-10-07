import React, { Component } from "react";

export default class DeleteButton extends Component{

    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);                     
        this.deleteRecipe = this.props.deleteRecipe;
    }

    handleDeleteClick(){      
        this.deleteRecipe(this.props.recipeId, this.props.history);        
    }

    render(){
        return (
            <button 
                onClick={ this.handleDeleteClick }
                className="waves-effect waves-light btn delete-button tooltipped"
                data-position="right"
                data-tooltip="Delete" 
                style={{marginRight: '1rem'}}
    
            >
                    <i className="material-icons">delete</i>
            </button>
        );
    }
        
}