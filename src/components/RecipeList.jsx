// @nots-check
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getRecipes } from 'actions/index';
import EditButton from 'components/Buttons/EditButton';
import DeleteButton from 'components/Buttons/DeleteButton';

/**
 * @description class component that returns a recipe list
 * @extends Component
 */
export class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.history = this.props.history;
    this.deleteRecipe = this.props.deleteRecipe;
  }

  /**
   * @description lifecycle method that fires when component mounts
   *  fires getRecipe action to populate component
   */
  componentDidMount() {
    this.props.getRecipes();
  }

  /**
   * @description helper method that creates recipe items to populate
   *  recipe list
   * @return {*} jsx element
   */
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

  /**
   * @description render method
   * @return {*} jsx element
   */
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

/**
 * @description maps state from redux object onto  props
 * @param {*} param0 - destructured items from state redux object
 * @return {Object} prop object
 */
const mapStateToProps = function({ recipes }) {
  return { recipes };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getRecipes }
  )(RecipeList)
);
