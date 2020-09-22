import React from "react";
import { connect } from 'react-redux';
import {useDrag} from "react-dnd";
import ListItem from "./ListItem";

const List = ({name}) => {
    const [{ isDragging }, drag] = useDrag({
        name,
        item: { type: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <ListItem drag={drag} isDragging={isDragging}>{name}</ListItem>
    )
};

const mapDispatch = dispatch => ({

});

export default connect(null, mapDispatch)(List)