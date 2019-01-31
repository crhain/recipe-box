// @ts-check
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

/**
 * @description class that returns an Home button
 * @extends Component
 */
export default class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.recipeId = props.recipeId;
  }

  /**
   * @description lifecycle method that fires when component is rendered
   */
  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { enterDelay: 800 });
  }

  /**
   * @description render method for the home button component
   * @return {*} jsx component
   */
  render() {
    return (
      <Link
        className="waves-effect waves-light btn home-button tooltipped"
        data-position="bottom"
        data-tooltip="Home"
        style={{ marginRight: '1rem' }}
        to="/"
      >
        Home
      </Link>
    );
  }
}
