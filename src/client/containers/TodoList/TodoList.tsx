import * as React from 'react'
import List from '@material-ui/core/List'
import Todo from '../Todo'

const TodoList = ({
	todoList
}) => (
	<div>
		<List>
			{todoList.map(({ description, isCompleted, id }) => (
				<Todo
					key={id}
					description={description}
					isCompleted={isCompleted}
					id={id}
				/>
			))}
		</List>
	</div>
)

export default TodoList
