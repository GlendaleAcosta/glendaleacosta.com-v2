import {combineReducers} from 'redux';
import pageLoadReducer from './pageLoadReducer';

export default combineReducers({
    pageLoad: pageLoadReducer
})