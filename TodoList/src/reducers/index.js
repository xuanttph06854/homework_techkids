import { combineReducers } from 'redux'
import CategoryReducer from './CategoryReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    currentCategory: CategoryReducer,
    tasks: taskReducer
})