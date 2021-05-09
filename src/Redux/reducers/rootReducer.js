import { combineReducers } from 'redux';
import changeNum from './counterReducer';

const rootReducer = combineReducers({
    changeNum
});

export default rootReducer;