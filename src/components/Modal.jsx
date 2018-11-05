import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteRecipe } from "actions/";
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

class Modal extends Component {
    componentDidMount(){              
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);      
    } 
    constructor(props){
      super(props);
      this.handleAcceptClick = this.handleAcceptClick.bind(this);
      this.acceptHandler = this.props.deleteRecipe.bind(this);
      this.recipeToDelete = this.props.recipeToDelete;
      this.history = this.props.history;
    } 

    handleAcceptClick(){   
      console.log('clicked delete accept button');
      this.acceptHandler(this.recipeToDelete, this.history); 
    }

    render() {
      // Render nothing if the "show" prop is false
      // if(!this.props.show) {
      //   return null;
      // }      
      return (                
        <div id="modal1" className="modal">
          <div className="modal-content">
            {this.props.children}
          </div>
          <div className="modal-footer">
            <button               
              className="modal-close waves-effect waves-green btn-flat"
              onClick={this.handleAcceptClick}
            >
              Agree
            </button>
            <button className="modal-close waves-effect waves-green btn-flat">Cancel</button>
          </div>
        </div>
      );
    }
  }

function mapStateToProps({ recipeToDelete }){
    return { recipeToDelete };
}

export default withRouter(connect(mapStateToProps, { deleteRecipe })(Modal));

