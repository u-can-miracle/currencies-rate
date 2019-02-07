import { cloneableGenerator } from '@redux-saga/testing-utils'
import { effectTypes } from 'redux-saga/effects'

import { TODO_ADD_REQUEST, TODO_ADD } from './actions'
import { addTodoSaga } from './saga'

describe('TodoList saga', () => {
 	it('should call saga with correct params', () => {
		const action = {
			type: TODO_ADD_REQUEST,
			payload: { description: 'description' }
		}

		const gen = cloneableGenerator(addTodoSaga)(action)
		gen.next()

		const sagaEffect1 = gen.next()
		expect(sagaEffect1.value.type).toEqual(effectTypes.PUT)

		const actionToPut = sagaEffect1.value.payload.action
		const expectedActionToPut = {
			type: TODO_ADD,
			payload: {
				description: 'description',
				id: actionToPut.payload.id
			}
		}

		expect(actionToPut).toEqual(expectedActionToPut)

		const res2 = gen.next()
		expect(res2.done).toEqual(true)
	})
})
