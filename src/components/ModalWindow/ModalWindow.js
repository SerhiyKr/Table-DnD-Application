import React, {useEffect, useState} from "react";
import ListItem from "../List/List";
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { setActiveColumns } from '../../reducers/activeColumn';
import {closedModal, setColumns} from '../../reducers/table';
import { Overlay, Modal, Content, Section, List, Button, Line, SearchInput } from './ModalWindow.styled'

const ModalWindow = ({columns, activeCols = [], setActiveColumns, setColumns, closedModal}) => {
    const cols = ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein'];

    let [othersCols, setOthersCols] = useState([]);

    let [search, setSearch] = useState('');

    useEffect(() => {
        setActiveColumns(columns);
    }, []);

    useEffect(() => {
        setOthersCols(cols.filter(c => activeCols.indexOf(c) === -1));
    }, [activeCols]);

    const [, dropForActive] = useDrop({
        accept: cols,
        canDrop: (item) => {
            return activeCols.indexOf(item.type) === -1
        },
        drop: (item) => {
            setActiveColumns([...activeCols, item.type]);
        }
    });

    const editSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const filterActiveCols = () => {
        return activeCols.filter(i => i.toLowerCase().indexOf(search.toLowerCase()) === 0)
    }

    const [, dropForOther] = useDrop({
        accept: cols,
        canDrop: (item) => {
            return othersCols.indexOf(item.type) === -1
        },
        drop: (item) => {
            setActiveColumns(activeCols.filter(c => c !== item.type));
        }
    });

    const submit = () => {
        setColumns(activeCols);
        closedModal();
    }


    return(
        <TableSelect
            search={search}
            editSearchInput={editSearchInput}
            closedModal={closedModal}
            submit={submit}
            dropForOther={dropForOther}
            dropForActive={dropForActive}
            othersCols={othersCols}
            filterActiveCols={filterActiveCols} />
    );
}

const mapState = state => ({
    columns: state.table.columns,
    activeCols: state.activeColumn
});

const mapDispatch = dispatch => ({
    setActiveColumns: (cols) => dispatch(setActiveColumns(cols)),
    setColumns: (cols) => dispatch(setColumns(cols)),
    closedModal: () => dispatch(closedModal())
});

const TableSelect = ({filterActiveCols, othersCols, dropForActive, dropForOther, submit, closedModal, search, editSearchInput}) => (
    <Overlay>
        <Modal>
            <SearchInput placeholder='Search' value={search} onChange={editSearchInput}/>
            <Content>
                <Section ref={dropForActive} className='active'>
                    <p className="font-italic">Active</p>
                    <List>
                        {filterActiveCols().map(i => <ListItem name={i} key={i} />)}
                    </List>
                    <Button onClick={submit}>Apply</Button><hr/>
                </Section>
                <Line/>
                <Section ref={dropForOther} className='other'>
                    <p className="font-italic">Other</p>
                    <List>
                        {othersCols.map(i => <ListItem name={i} key={i} />)}
                    </List>
                </Section>
            </Content>


            <Button onClick={closedModal}>Closed</Button>
        </Modal>
    </Overlay>
);

export default connect(mapState, mapDispatch)(ModalWindow)