import todoListReducer from './todoListReducer'
import currentReducer from './currentReducer'
import { combineReducers } from 'redux'

export default combineReducers({ todo: todoListReducer, current: currentReducer })
