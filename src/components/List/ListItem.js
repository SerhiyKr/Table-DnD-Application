import React from "react";

const ListItem = ({children, isDragging, drag}) => (
    <div className="list-group-item list-group-item-action list-group-item-dark" ref={drag} isDragging={isDragging}>{children}</div>
);

export default ListItem;