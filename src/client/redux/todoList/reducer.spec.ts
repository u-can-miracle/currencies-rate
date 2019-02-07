import todoListReducer from './reducer'
import {
	TODO_ADD,
	TODO_ADD_REQUEST,
	TOGGLE_IS_COMPLETED,
	REMOVE_TODO,
} from './actions'

describe('TodoList reducer', () => {
 	it('should add todo after "TODO_ADD"', () => {
		const todoToAdd = {
			type: TODO_ADD,
			payload: {
				description: 'description',
				id: 1
			}
		}

		const expectedState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: false
				}
			}
		}
		expect(todoListReducer(undefined, todoToAdd)).toEqual(expectedState)
	})

	it('should not change state after "TODO_ADD_REQUEST"', () => {
		const todoToAdd = {
			type: TODO_ADD_REQUEST,
			payload: {
				description: 'new_description'
			}
		}

		const expectedState = {
			todos: {}
		}
		expect(todoListReducer(undefined, todoToAdd)).toEqual(expectedState)
	})

	it('should toggle completed after "TOGGLE_IS_COMPLETED" from "false" to "true"', () => {
		const todoToToggle = {
			type: TOGGLE_IS_COMPLETED,
			payload: {
				id: 1
			}
		}

		const initialState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: false
				}
			}
		}
		const expectedState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: true
				}
			}
		}
		expect(todoListReducer(initialState, todoToToggle)).toEqual(expectedState)
	})

	it('should toggle completed after "TOGGLE_IS_COMPLETED" from "true" to "false"', () => {
		const todoToToggle = {
			type: TOGGLE_IS_COMPLETED,
			payload: {
				id: 1
			}
		}

		const initialState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: true
				}
			}
		}
		const expectedState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: false
				}
			}
		}
		expect(todoListReducer(initialState, todoToToggle)).toEqual(expectedState)
	})

	it('should remove todo after "REMOVE_TODO" if todo id exists', () => {
		const todoToRemove = {
			type: REMOVE_TODO,
			payload: {
				id: 1
			}
		}

		const initialState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: true
				}
			}
		}
		const expectedState = {
			todos: {}
		}
		expect(todoListReducer(initialState, todoToRemove)).toEqual(expectedState)
	})

	it('should not remove todo after "REMOVE_TODO" if todo id does not exist', () => {
		const todoToRemove = {
			type: REMOVE_TODO,
			payload: {
				id: 2
			}
		}

		const initialState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: true
				}
			}
		}
		const expectedState = {
			todos: {
				1: {
					description: 'description',
					isCompleted: true
				}
			}
		}
		expect(todoListReducer(initialState, todoToRemove)).toEqual(expectedState)
	})
})
