import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe } from "../../actions";



class RecipeView extends Component{
    
    componentDidMount(){

    }

    render(){
        //get id paramater from url
        const {id} = this.props.match.params;
        return (
            <div>
                <h1>Recipe View For: { id }</h1>
                <Link className="waves-effect waves-light btn" style={{marginRight: '1rem'}} to="/recipe/1555/edit">Edit Recipe</Link>
                <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
            </div>
        );
    }
}


function mapStateToProps({ recipes }){
    return { recipes };
}

export default connect(mapStateToProps, { getRecipe })(RecipeView);

