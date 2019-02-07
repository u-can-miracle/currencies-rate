import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'

interface IProps {
	description: string
	isCompleted: boolean
	id: number
	toggleIsCompleted: (id: number) => void
	removeTodo: (id: number) => void
}

const Todo = ({
	description,
	isCompleted,
	id,
	toggleIsCompleted,
	removeTodo
}: IProps) => {
	function removeTodoHandler(e){
		e.stopPropagation()
		removeTodo(id)
	}

	return (
		<ListItem
			key={id}
			role={undefined}
			dense
			button
			onClick={() => toggleIsCompleted(id)}
		>
			<Checkbox
				checked={isCompleted}
				tabIndex={-1}
				disableRipple
				className="single-todo-checkbox"
			/>
			<ListItemText
				primary={description}
				className="single-todo"
			/>
			<DeleteForeverSharpIcon
				onClick={(e) => removeTodoHandler(e)}
			/>
		</ListItem>
	)
}

export default Todo
