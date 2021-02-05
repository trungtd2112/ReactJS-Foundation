import editStatus from './reducers/editStatusReducer';
import numReducer from './reducers/numReducer';

var redux = require('redux');

const allReducers = redux.combineReducers({
    num : numReducer,
    editStatus : editStatus
})

var store01 = redux.createStore(allReducers);
store01.subscribe(() => {
    console.log("state thay doi");
})

store01.dispatch({ type: "CHANGE_EDIT_STATUS" })

export default store01;