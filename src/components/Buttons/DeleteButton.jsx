import React from "react";

export default function DeleteButton(props){
    return (
        <button 
            onClick={ props.handleDeleteClick }
            className="waves-effect waves-light btn delete-button" 
            style={{marginRight: '1rem'}}

        >
                <i className="material-icons">delete</i>
        </button>
    );    
}