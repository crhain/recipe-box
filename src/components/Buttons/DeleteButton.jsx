import React, { Component } from "react";
import { connect } from 'react-redux';
import { setRecipeToDelete } from "actions/";
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

class DeleteButton extends Component{
    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);                     
        this.setRecipeToDelete = this.props.setRecipeToDelete.bind(this);        
    }
    componentDidMount(){        
        var elems = document.querySelectorAll('.tooltipped');        
        M.Tooltip.init(elems, {enterDelay: 800});             
    }   
    handleDeleteClick(){                   
        this.setRecipeToDelete(this.props.recipeId)        
    }

    render(){
        return (
            <button                 
                className="waves-effect waves-light btn delete-button tooltipped modal-trigger"
                onClick={this.handleDeleteClick}
                data-target="modal1"
                data-position="bottom"
                data-tooltip="Delete" 
                style={{marginRight: '1rem'}}    
            >
                    <i className="material-icons">delete</i>
            </button>
        );
    }
        
}

function mapStateToProps({ recipeToDelete }){
    return { recipeToDelete };
}

export default connect(mapStateToProps, { setRecipeToDelete })(DeleteButton);

