import { createSelector } from 'reselect'

export const todoListSelector = state => state.todoList.todos

export const todoListFormattedSelector = createSelector(
 	todoListSelector,
 	todoList => Object.keys(todoList).map(key => ({
		id: key,
		description: todoList[key].description,
		isCompleted: todoList[key].isCompleted
	}))
)
