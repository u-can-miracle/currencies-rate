import { TODO_ADD, TOGGLE_IS_COMPLETED, REMOVE_TODO, TODO_EDIT } from './actions'
import { IAction } from '../../interfaces/reducer'

interface ITodoListState {
	todos: {
		[key: string]: {
			description: string,
			isCompleted: boolean
		}
	}
}

const initialState: ITodoListState = {
	todos: { }
}

export default function todoListReducer(state = initialState, action: IAction){
	switch (action.type) {
		case TODO_ADD:
			return {
				...state,
				todos: {
					...state.todos,
					[action.payload.id]: {
						description: action.payload.description,
						isCompleted: false
					}
				}
			}

		case TOGGLE_IS_COMPLETED:
			const todo = state.todos[action.payload.id]
			return {
				...state,
				todos: {
					...state.todos,
					[action.payload.id]: {
						...todo,
						isCompleted: !todo.isCompleted
					}
				}
			}

		case REMOVE_TODO:
			const newTodos = { ...state.todos }
			delete newTodos[action.payload.id]

			return {
				...state,
				todos: newTodos
			}

		case TODO_EDIT:
			return {
				...state,
				todos: {
					...state.todos,
					[action.payload.id]: { description: action.payload.description }
				}
			}

		default:
			return state
	}
}
