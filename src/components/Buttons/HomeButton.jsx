import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';

export default class HomeButton extends Component{
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
                className="waves-effect waves-light btn home-button tooltipped" 
                data-position="bottom"
                data-tooltip="Home"
                style={{marginRight: '1rem'}} 
                to="/"
            >
                Home
            </Link>
        );
    }
        
}