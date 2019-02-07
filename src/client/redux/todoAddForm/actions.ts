export const EDIT_TODO_TO_ADD = 'EDIT_TODO_TO_ADD'
export const editTodoToAdd = (description: string) => ({
	type: EDIT_TODO_TO_ADD,
	payload: { description }
})
export const clearTodoToAdd = () => ({
	type: EDIT_TODO_TO_ADD,
	payload: { description: '' }
})
