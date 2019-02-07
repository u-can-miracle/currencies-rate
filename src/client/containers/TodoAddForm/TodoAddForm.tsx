import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const TodoAddForm = ({ description, editTodoToAdd, addTodo }) => (
	<div
		className="todo-add-form"
	>
		<TextField
			className="todo-add-form__input"
			margin="normal"
			value={description}
			onChange={(e) => editTodoToAdd(e.target.value)}
		/>
		<Button
			variant="contained"
			size="small"
			color="primary"
			className="todo-add-form__button"
			onClick={() => addTodo(description)}
		>
			Add todo
		</Button>
	</div>
)

export default TodoAddForm
