import { EDIT_TODO_TO_ADD } from './actions'

import { IAction } from '../../interfaces/reducer'

interface IAddTodoFormState {
	addTodoDescription: string
}

const initialState: IAddTodoFormState = {
	addTodoDescription: ''
}

export default function addTodoFormReducer(state = initialState, action: IAction){
	switch (action.type) {
		case EDIT_TODO_TO_ADD:
			return {
				...state,
				addTodoDescription: action.payload.description
			}

		default:
			return state
	}
}
