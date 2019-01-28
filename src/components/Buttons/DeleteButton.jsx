// @ts-check
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeToDelete } from 'actions/index';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

/**
 * @description Delete button component that opens a modal window
 *  to select to delete a recipe or not
 * @extends Component
 */
class DeleteButton extends Component {
  /**
   * @constructor
   * @param {Object} props - property object
   */
  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.setRecipeToDelete = this.props.setRecipeToDelete.bind(this);
  }

  /**
   * @description lifecycle method that fires when component is rendered
   */
  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { enterDelay: 800 });
  }
  /**
   * @description method that sets recipe id to be deleted when a user
   *  clicks on the delete button
   */
  handleDeleteButtonClick() {
    this.setRecipeToDelete(this.props.recipeId);
  }

  /**
   * @description render method for the delete button component
   * @return {*} jsx component
   */
  render() {
    return (
      <button
        className="waves-effect waves-light btn red delete-button tooltipped modal-trigger"
        onClick={this.handleDeleteButtonClick}
        data-target="modal1"
        data-position="bottom"
        data-tooltip="Delete"
        style={{ marginRight: '1rem' }}
      >
        <i className="material-icons">delete</i>
      </button>
    );
  }
}

/**
 * @description utility function to map state to props
 * @param {*} param0 - recipeToDelete is extracted from state object
 * @return {Object} that represents mapped state
 */
const mapStateToProps = function({ recipeToDelete }) {
  return { recipeToDelete };
};

export default connect(
  mapStateToProps,
  { setRecipeToDelete }
)(DeleteButton);
