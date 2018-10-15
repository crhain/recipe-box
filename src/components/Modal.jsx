import React, { Component } from 'react';

class Modal extends Component {    
    render() {
      // Render nothing if the "show" prop is false
      if(!this.props.show) {
        return null;
      }      
      return (
        <div className="modal-backdrop">
          <div className="delete-modal">
            {this.props.children}
  
            <div className="footer">
              <button>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

export default Modal;
