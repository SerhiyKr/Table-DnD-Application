const SET_ACTIVE_COLUMNS = 'SET_ACTIVE_COLUMNS'

export const setActiveColumns = cols => ({
    type: SET_ACTIVE_COLUMNS,
    payload: {cols}
})

function activeColumn(state = {}, action) {
    switch (action.type) {
        case SET_ACTIVE_COLUMNS:
            return action.payload.cols;
        default:
            return state;
    }
}

export default activeColumn