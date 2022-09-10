import { combineReducers } from 'redux';
import authReducer from './authReducer';

export const reducers = combineReducers({
    userInfo: authReducer
})