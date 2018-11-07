import React, { Component } from 'react';
import AddButton from "components/Buttons/AddButton";
import DeleteModal from "components/DeleteModal";

class Header extends Component {
    render(){
        return (
            <div>
                <AddButton />
                <DeleteModal acceptHandler={this.deleteRecipe} >
                    <h4>Delete Confirmation</h4>
                    <p>Do you wish to delete this recipe?</p>
                </DeleteModal>
            </div>
        );        
    }
}

export default Header;