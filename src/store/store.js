import { createStore, combineReducers } from "redux";

import table from '../reducers/table';
import desserts from '../reducers/desserts';
import activeColumn from '../reducers/activeColumn';

import tableData from './tableData';

const rootReducer = combineReducers({
    table: table,
    desserts: desserts,
    activeColumn: activeColumn
});

export default () => createStore(rootReducer, tableData)
