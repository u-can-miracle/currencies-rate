export const TODO_ADD = 'TODO_ADD'
export const addTodo = (description: string, id: number) => ({
	type: TODO_ADD,
	payload: { description, id }
})

export const TODO_ADD_REQUEST = 'TODO_ADD_REQUEST'
export const addTodoRequest = (description: string) => ({
	type: TODO_ADD_REQUEST,
	payload: { description }
})

export const TOGGLE_IS_COMPLETED = 'TOGGLE_IS_COMPLETED'
export const toggleIsCompleted = (id: number) => ({
	type: TOGGLE_IS_COMPLETED,
	payload: { id }
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = (id: number) => ({
	type: REMOVE_TODO,
	payload: { id }
})

// TODO: implement editing
export const TODO_EDIT = 'TODO_EDIT'
