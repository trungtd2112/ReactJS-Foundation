const numReducerInitialState = ["manHinh", "chuot", "banPhim"];
const numReducer = (state = numReducerInitialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.newItem]
        case "DELETE":
            return [state.filter((value, key) => key !== action.index)]
        default:
            return state
    }
}

export default numReducer;