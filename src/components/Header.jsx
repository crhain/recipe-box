import React, { Component } from 'react';
import AddButton from "components/Buttons/AddButton";
import DeleteModal from "components/DeleteModal";

class Header extends Component {
    render(){
        return (
            <div>
                <AddButton />
                <DeleteModal acceptHandler={this.deleteRecipe} >
                    <h4>Test Modal</h4>
                    <p>Some text here</p>
                </DeleteModal>
            </div>
        );        
    }
}

export default Header;