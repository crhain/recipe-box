import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addRecipe } from "../../actions";

class New extends Component{
    
    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.history = this.props.history; 
    }

    handleAddClick(event){
        event.preventDefault();
        let recipe = {
            id: "newstuffnow",
            title: "New Stuff Now",
            servings: 4,
            ingredients: [
                "1 cup awesome",
                "2 teaspoons good"
            ]
        };        
        this.props.addRecipe(recipe, this.history);
    }

    render(){
        return (
            <div>
                <h1>Create A New Recipe</h1>
                <Link className="waves-effect waves-light btn" to="/">Back To Listing</Link>
                <form>
                    <label htmlFor="add-recipe-name">
                        Recipe Name
                        <input name="name" id="add-recipe-name" type="text"/>
                    </label>
                    
                    <label htmlFor="add-recipe-ingredients">
                        Recipe Ingredients
                        <textarea name="ingredients" id="add-recipe-ingredients" type="text">
                        </textarea>                   
                    </label> 
                    
                    <button className="waves-effect waves-light btn" onClick={this.handleAddClick}>Add</button>
                </form>
                
            </div>
        );
    }
}


// function mapStateToProps({ recipe }){
//     return { recipe };
// }

export default withRouter(connect(null, { addRecipe })(New));