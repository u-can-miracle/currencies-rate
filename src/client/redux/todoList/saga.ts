import { IAction } from '../../interfaces/reducer'
import { put, takeEvery, delay } from 'redux-saga/effects'

import {
	TODO_ADD_REQUEST,
	addTodo
} from './actions'

export function* addTodoSaga(action: IAction){
	yield delay(200)

	const id = Date.now() // simulate fake id from server

	yield put(addTodo(action.payload.description, id))
}
export function* watchAddTodoRequest(){
	yield takeEvery(TODO_ADD_REQUEST, addTodoSaga)
}
