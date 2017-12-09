import todoListReducer from './todoListReducer'
import { combineReducers } from 'redux'

export default combineReducers({ todo: todoListReducer })
