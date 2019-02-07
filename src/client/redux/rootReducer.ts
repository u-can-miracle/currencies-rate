import { combineReducers } from 'redux'

import todoList from './todoList/reducer'
import todoAddForm from './todoAddForm/reducer'

export default combineReducers({
	todoList,
	todoAddForm
})
