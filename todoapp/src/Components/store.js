import fbData from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    testConnect : 'justTest'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            fbData.push(action.item);
            console.log("them thanh cong");
            return state
        default:
            return state
    }
}
var store1 = redux.createStore(allReducer);

export default store1;