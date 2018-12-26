//@nots-check
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipe } from 'actions/';
import BackButton from 'components/Buttons/BackButton';
import EditButton from 'components/Buttons/EditButton';
import DeleteButton from 'components/Buttons/DeleteButton';

export class RecipeView extends Component {
  componentWillMount() {
    //nothing here for right now
  }

  constructor(props) {
    super(props);
    // this.recipe = null;
    this.recipeId = this.props.match.params.id;
    this.history = this.props.history;

    //get recipe to be displayed
    this.props.getRecipe(this.props.match.params.id);
  }

  renderIngredients() {
    let ingredients = [];

    if (this.props.selectedRecipe.ingredients) {
      ingredients = this.props.selectedRecipe.ingredients.map((item, index) => (
        <li className="collection-item recipe__ingredient" key={index}>
          {item.quantity + ' ' + item.measure + ' ' + item.ingredient}
        </li>
      ));
    }

    return ingredients;
  }

  renderInstructions() {
    let instructions = [];

    if (this.props.selectedRecipe.instructions) {
      instructions = this.props.selectedRecipe.instructions.map(
        (instruction, index) => (
          <li className="collection-item recipe__instruction" key={index}>
            {index + 1 + '. ' + instruction}
          </li>
        )
      );
    }

    return instructions;
  }

  render() {
    return (
      <div className="recipe container">
        <h1 className="recipe__title">
          {this.props.selectedRecipe ? this.props.selectedRecipe.title : ''}
        </h1>
        <div className="recipe__image">
          <img
            src={
              this.props.selectedRecipe ? this.props.selectedRecipe.image : ''
            }
          />
        </div>
        <EditButton recipeId={this.recipeId} />
        <DeleteButton recipeId={this.recipeId} history={this.history} />
        <BackButton history={this.history} />
        <div>
          <p className="recipe__description">
            {this.props.selectedRecipe
              ? this.props.selectedRecipe.description
              : ''}
          </p>
          <h3 className="recipe__servings">
            Servings:{' '}
            <span>
              {this.props.selectedRecipe
                ? this.props.selectedRecipe.servings
                : ''}
            </span>
          </h3>
          <div className="recipe__ingredientList">
            <h3 className="collection-header">Ingredients</h3>
            <ul className="collection with-header">
              {this.renderIngredients()}
            </ul>
          </div>
          <div className="recipe_instructionList">
            <h3 className="collection-header">Preparation</h3>
            <ul className="collection with-header">
              {this.renderInstructions()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function({ selectedRecipe }) {
  return { selectedRecipe };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getRecipe }
  )(RecipeView)
);
