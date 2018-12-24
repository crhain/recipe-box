// @nots-check
import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";

export default class AddButton extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems, { enterDelay: 800 });
  }
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
