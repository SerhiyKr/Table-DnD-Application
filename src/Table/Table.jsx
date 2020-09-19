import React, { Component } from "react";
import ModalWindow from "../ModalWindow";
import "./Table.css"

let headTable = [{
    "id": "ID",
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "E-Mail",
    "phone": "Phone"
}]

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headTable
        }
    }

    render() {
        return(
            <div>
                <h1 className="page-header">Table DnD Application</h1>
                <ModalWindow headTable={this.state.headTable} />
                <br/>
                <table className="table">
                        { this.state.headTable.map(item =>(
                            <thead key={item.id + item.phone}>
                                <th>{item.id}</th>
                                <th>{item.firstName}</th>
                                <th>{item.lastName}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                            </thead>
                        ))}
                    <tbody>
                    { this.props.data.map(item =>(
                        <tr key={item.id + item.phone}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}