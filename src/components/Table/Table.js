import React, {Fragment} from "react";
import {connect} from 'react-redux';
import {openModal} from "../../reducers/table";
import { Button } from "react-bootstrap";

const TableBody = ({cols, desserts, openModal}) => (
    <Fragment>

        <table className="table">
            <thead className="thead-dark">
                <tr>{cols.map((col) => <th key={col}>{col}</th>)}</tr>
            </thead>
            <tbody>
            {desserts.map(d => <tr key={d.id}>
                {cols.map(colName => <td key={colName}>
                    {d[colName]}
                </td>)}
            </tr>)}
            </tbody>
        </table>
        <Button className="btn btn-secondary" onClick={openModal}>Select Grid Columns</Button>
    </Fragment>
)

const Table = ({cols, desserts, openModal}) => {
    return(<TableBody
        cols={cols}
        desserts={desserts}
        openModal={openModal}/>);
}

const mapState = state => ({
    cols: state.table.columns,
    desserts: state.desserts
});

const mapDispatch = dispatch => ({
    openModal: () => dispatch(openModal())
});

export default connect(mapState, mapDispatch)(Table)