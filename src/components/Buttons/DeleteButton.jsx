import React, { Component } from "react";
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

export default class DeleteButton extends Component{
    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);                     
        this.deleteRecipe = this.props.deleteRecipe;
    }
    componentDidMount(){        
        var elems = document.querySelectorAll('.tooltipped');        
        M.Tooltip.init(elems, {enterDelay: 800});             
      }   
    handleDeleteClick(){   
        this.deleteRecipe(this.props.recipeId, this.props.history);        
    }

    render(){
        return (
            <button 
                onClick={ this.handleDeleteClick }
                className="waves-effect waves-light btn delete-button tooltipped"
                data-position="bottom"
                data-tooltip="Delete" 
                style={{marginRight: '1rem'}}
    
            >
                    <i className="material-icons">delete</i>
            </button>
        );
    }
        
}