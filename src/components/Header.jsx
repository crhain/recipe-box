// @ts-check
import React, { Component } from 'react';
import AddButton from 'components/Buttons/AddButton';
import HomeButton from 'components/Buttons/HomeButton';
import DeleteModal from 'components/DeleteModal';

/**
 * @description functional component for Header element
 * @return {*} jsx element
 */
const Header = function(props) {
  return (
    <div>
      <HomeButton />
      <AddButton />
      <DeleteModal>
        <h4>Delete Confirmation</h4>
        <p>Do you wish to delete this recipe?</p>
      </DeleteModal>
    </div>
  );
};

export default Header;
