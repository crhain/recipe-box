import React, { Component } from 'react';

class Modal extends Component{
    render(){
        if(!this.props.show){
            return null;
        }

        const backdropStyle = {
            postion: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'regba(0, 0, 0, 0.3',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRAdius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto', 
            padding: 30
        };

        return (
            <div className="backdrop" style={{ backdropStyle }}>
                <div className="modal" style={{ modalStyle }}>
                    { this.props.children }

                    <div className="footer">
                        <button onClick={this.props.onClose}>Close</button>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
