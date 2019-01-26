// @ts-check
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

/**
 * @describe class for a button that adds a new recipe
 * @extends Component
 */
export default class AddButton extends Component {
  /**
   * @description lifecycle method that adds tool tips logic
   *  from materialize when component mounts
   */
  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { enterDelay: 800 });
  }

  /**
   * @description render method for component
   * @return {*} jsx component
   */
  render() {
    return (
      <Link
        className="waves-effect waves-light btn add-button tooltipped"
        data-position="bottom"
        data-tooltip="New Recipe"
        to="/recipe/new"
      >
        <i className="material-icons">add</i>
      </Link>
    );
  }
}
