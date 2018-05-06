import React from "react";
import { Link } from 'react-router-dom';

export default function ReturnButton(props){
    return (
        <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
    );
}