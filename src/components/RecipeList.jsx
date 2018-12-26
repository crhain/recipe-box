// @nots-check
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getRecipes } from 'actions/';
import EditButton from 'components/Buttons/EditButton';
import DeleteButton from 'components/Buttons/DeleteButton';

export class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.history = this.props.history;
    this.deleteRecipe = this.props.deleteRecipe;
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  createRecipeList() {
    if (this.props.recipes.length > 0) {
      return this.props.recipes.map((recipe, index) => {
        return (
          <li key={index} className="recipe-list__recipe">
            <Link
              to={'/recipe/' + recipe.id}
              className="collection-item recipe-list__recipe__name"
            >
              {recipe.title}
            </Link>
            <EditButton recipeId={recipe.id} />
            <DeleteButton recipeId={recipe.id} history={this.history} />
          </li>
        );
      });
    } else {
      return <li />;
    }
  }

  render() {
    return (
      <div className="recipe-list container">
        <h1 className="recipe-list__heading">Recipe List</h1>
        <div>
          <ul className="collection">{this.createRecipeList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function({ recipes }) {
  return { recipes };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getRecipes }
  )(RecipeList)
);
