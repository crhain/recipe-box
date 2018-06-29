import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addRecipe } from "actions/";
import fields from "components/Form/fields";
import Form from "components/Form/Form";
import BackButton from "components/Buttons/BackButton";

 export class New extends Component {
    constructor(props){
        super(props);
        this.history = this.props.history;
    }

    render(){
        let history = this.props.history;
        let addRecipe = this.props.addRecipe;        
        return (        
            <div>
                <h1>Create A New Recipe</h1>        
                <Form fields={fields} formHandler={ addRecipe } history={ history } />
                <BackButton history={ this.history }/>
            </div>        
        );
    }
 };
 
export default withRouter(connect(null, { addRecipe })(New));


