import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageDisplay extends Component{
    render () {
        return (
            <div className="message-display"> 
                {this.props.messageDisplay}         
            </div>
        );
    };
}

function mapStateToProps({ messageDisplay }){
    return { messageDisplay };
}

export default connect(mapStateToProps)(MessageDisplay);