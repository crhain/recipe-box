import React from "react";
import { Link } from 'react-router-dom';

export default function AddButton(props){
    return (
        <Link 
            className="waves-effect waves-light btn add-button"             
            to="/recipe/new"
        >
            <i className="material-icons right">add</i>New Recipe
            
        </Link>
    );    
}