import { connect } from 'react-redux'

import Todo from './Todo'

import { toggleIsCompleted, removeTodo } from '../../redux/todoList/actions'

const mapDispatchToProps = dispatch => ({
	toggleIsCompleted: (id: number) => dispatch(toggleIsCompleted(id)),
	removeTodo: (id: number) => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo)
