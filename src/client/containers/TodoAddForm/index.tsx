import { connect } from 'react-redux'

import TodoAddForm from './TodoAddForm'
import { todoAddFormDescriptionSelector } from '../../redux/todoAddForm/selector'
import { addTodoRequest } from '../../redux/todoList/actions'
import {
	editTodoToAdd,
	clearTodoToAdd
} from '../../redux/todoAddForm/actions'

const mapStateToProps = (state, props) => ({
	description: todoAddFormDescriptionSelector(state)
})

const mapDispatchToProps = (dispatch, a,b,c) => ({
	editTodoToAdd: (description: string) => dispatch(editTodoToAdd(description)),
	addTodo: (description: string) => {
		dispatch(addTodoRequest(description))
		dispatch(clearTodoToAdd())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddForm)
