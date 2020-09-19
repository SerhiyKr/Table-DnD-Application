import React, { Component } from "react";
import {Button, Modal} from "react-bootstrap";

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleModal(){
        this.setState(
            {show:!this.state.show}
        )
    }

    render() {
        return (
            <div>
                <Button onClick={() => {this.handleModal()}}>Select Grid Column</Button>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton onHide={() => {this.handleModal()}}>
                        Modal head
                    </Modal.Header>
                    <Modal.Body>
                        Modal body
                        { this.props.headTable.map(item =>(
                            <ul key={item.id + item.phone}>
                                <li>{item.id}</li>
                                <li>{item.firstName}</li>
                                <li>{item.lastName}</li>
                                <li>{item.email}</li>
                                <li>{item.phone}</li>
                            </ul>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => {this.handleModal()}}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}