import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

export default class EditButton extends Component{
    constructor(props){
        super(props);    
        this.recipeId = props.recipeId;                                 
    }
    
    componentDidMount(){        
        var elems = document.querySelectorAll('.tooltipped');        
        M.Tooltip.init(elems, {enterDelay: 800});             
    }   
    render(){
        return (
            <Link 
                className="waves-effect waves-light btn edit-button tooltipped" 
                data-position="bottom"
                data-tooltip="Edit"
                style={{marginRight: '1rem'}} 
                to={"/recipe/" + this.recipeId + "/edit"}
            >
                <i className="material-icons">edit</i>
            </Link>
        );
    }
        
}