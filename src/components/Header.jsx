import React, { Component } from 'react';
import AddButton from "components/Buttons/AddButton";
import Modal from "components/Modal";

class Header extends Component {
    render(){
        return (
            <div>
                <AddButton />
                <Modal acceptHandler={this.deleteRecipe} >
                    <h4>Test Modal</h4>
                    <p>Some text here</p>
                </Modal>
            </div>
        );        
    }
}

export default Header;