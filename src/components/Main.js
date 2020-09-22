import React, { Fragment } from "react";
import { connect } from 'react-redux';
import Table from "./Table/Table";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ModalWindow from "./ModalWindow/ModalWindow";


const Main = ({status}) => (
    <Fragment>
        <DndProvider backend={HTML5Backend}>
            {status && <ModalWindow/>}
        </DndProvider>
        <Table />
    </Fragment>
);

const mapState = state => ({
    status: state.table.modalStatus
})

export default connect(mapState, null)(Main);