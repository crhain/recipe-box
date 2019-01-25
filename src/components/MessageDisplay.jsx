// @ts-check
import React from 'react';
import { connect } from 'react-redux';
//@ts-ignore
import { getLatestMessage } from 'redux-flash';

/**
 * @description functional component that displays a flash message
 * @param {*} param0 - flash property on props
 * @return {*} jsx component
 */
function MessageDisplay({ flash }) {
  return (
    <div className="message-display">
      {flash && <div>{flash.message} </div>}
    </div>
  );
}

/**
 * @description function that maps redux state onto props
 * @param {*} state - represents redux state object
 */
const mapStateToProps = function(state) {
  return { flash: getLatestMessage(state) };
};

export default connect(mapStateToProps)(MessageDisplay);
