import { all } from 'redux-saga/effects'

import {
	watchAddTodoRequest,
} from './todoList/saga'

export default function* rootSaga(){
	yield all([
		watchAddTodoRequest()
	])
}
