import * as React from 'react'
import { Provider } from 'react-redux'

import TodoList from '../TodoList'
import TodoAddForm from '../TodoAddForm'
import getSingletoneStore from '../../redux/store/get-singletone-store'
import sagaMiddleware from '../../redux/middlewares/sagaMiddleware'
import rootSaga from '../../redux/rootSaga'

const store = getSingletoneStore()

sagaMiddleware.run(rootSaga)

const ProviderWrapper = () => (
	<Provider store={store}>
		<div className="todo-list-container">
			<TodoAddForm />
			<TodoList />
		</div>
	</Provider>
)

export default ProviderWrapper
