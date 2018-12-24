// @nots-check
import React, { Component } from "react";

export default class ReturnButton extends Component {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.history = props.history;
  }

  handleBackClick() {
    this.history.goBack();
  }

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
