import React from "react";
import { Link } from 'react-router-dom';

export default function EditButton(props){
    return (
        <Link 
            className="waves-effect waves-light btn" 
            style={{marginRight: '1rem'}} 
            to={"/recipe/" + props.recipeId + "/edit"}
        >
            <i className="material-icons">edit</i>
        </Link>
    );    
}