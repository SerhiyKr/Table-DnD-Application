const SET_COLUMNS = 'SET_COLUMNS';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSED_MODAL = 'CLOSED_MODAL';

export const setColumns = (cols) => ({
    type: SET_COLUMNS,
    payload: cols
});

export const openModal = () => ({
    type: OPEN_MODAL,
    status: true
});

export const closedModal = () => ({
    type: CLOSED_MODAL,
    status: false
});

function table(state = {}, action) {
    switch (action.type) {
        case SET_COLUMNS:
            return {...state, 'columns': action.payload};
        case OPEN_MODAL:
            return {...state, 'modalStatus': action.status};
        case CLOSED_MODAL:
            return {...state, 'modalStatus': action.status};
        default:
            return state;
    }
}

export default table;