import { connect } from 'react-redux'

import TodoList from './TodoList'

import { todoListFormattedSelector } from '../../redux/todoList/selector'

const mapStateToProps = (state, props) => ({
	todoList: todoListFormattedSelector(state)
})

export default connect(mapStateToProps)(TodoList)
