import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe, getRecipes } from "../../actions";



class RecipeView extends Component{
    componentWillMount(){              
        this.props.getRecipe(this.props.match.params.id);                                  
    }

    constructor(props){
        super(props);                
        this.recipe = null;        
    }

    render(){
        
        return (
            <div>
                <h1>{ this.props.recipe ? this.props.recipe.title : "" }</h1>
                <div>
                    
                </div>
                <Link className="waves-effect waves-light btn" style={{marginRight: '1rem'}} to="/recipe/1555/edit">Edit Recipe</Link>
                <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
            </div>
        );
    }
}


function mapStateToProps({ recipe }){
    return { recipe };
}

export default connect(mapStateToProps, { getRecipe })(RecipeView);

