import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestMessage } from 'redux-flash';

function MessageDisplay({ flash }) {
    return (
        <div className="message-display">
            {
                flash && <div>{flash.message} </div>
            }
        </div>
    );
}

function mapStateToProps(state) {
    return { flash: getLatestMessage(state) };
}

export default connect(mapStateToProps)(MessageDisplay);