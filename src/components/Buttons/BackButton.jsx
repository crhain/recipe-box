// @ts-check
import React, { Component } from 'react';

/**
 * @describe class for a Return button that returns to the previous
 *  page visited
 * @extends Component
 */
export default class ReturnButton extends Component {
  /**
   * @constructor
   * @param {Object} props - contains properties for component
   */
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.history = props.history;
  }

  /**
   * @describe handles button click
   */

  handleBackClick() {
    this.history.goBack();
  }

  /**
   * @describe render function for component
   * @return {*} jsx component
   */
  render() {
    return (
      <button
        className="waves-effect waves-light btn back-button"
        onClick={this.handleBackClick}
      >
        Back
      </button>
    );
  }
}
