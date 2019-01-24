// @nots-check
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteRecipe } from 'actions/index';
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

/**
 * @description DeleteModal class that renders the modal window for choosing to delete
 * @extends Component
 */
class DeleteModal extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }
  /**
   * @desccription create a DeleteModal
   * @param {Object} props - properties to be used by DeleteModal
   */
  constructor(props) {
    super(props);
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.acceptHandler = this.props.deleteRecipe.bind(this);
    this.history = this.props.history;
  }

  /**
   * @description handles accept click for DeleteModal
   * @callback handleAcceptClick
   */
  handleAcceptClick() {
    this.acceptHandler(this.props.recipeToDelete, this.history);
  }
  /**
   * @description renders DeleteModal component
   * @return {*} jsx element
   */
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">{this.props.children}</div>
        <div className="modal-footer">
          <button
            className="modal-close waves-effect waves-green btn-flat"
            onClick={this.handleAcceptClick}
          >
            Accept
          </button>
          <button className="modal-close waves-effect waves-green btn-flat">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function({ recipeToDelete }) {
  return { recipeToDelete };
};

export default withRouter(
  connect(
    mapStateToProps,
    { deleteRecipe }
  )(DeleteModal)
);
