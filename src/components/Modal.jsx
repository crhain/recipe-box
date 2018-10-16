import React, { Component } from 'react';
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

class Modal extends Component {
    componentDidMount(){              
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);      
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
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      );
    }
  }

export default Modal;
