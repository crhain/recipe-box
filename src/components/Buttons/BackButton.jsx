import React from "react";
import { Link } from 'react-router-dom';

export default function ReturnButton(props){
    return (
        <button 
            className="waves-effect waves-light btn back-button" to="/" 
            onClick={props.handleBackClick}
        >
            Back To Listing
        </button>
    );
}