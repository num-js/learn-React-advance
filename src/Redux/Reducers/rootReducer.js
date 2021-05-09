import changeNum from "./counterReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeNum
    // second Reducer if available
});

export default rootReducer;