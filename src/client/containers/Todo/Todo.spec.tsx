import * as React from 'react'
import * as sinon from 'sinon'
import { shallow, configure } from 'enzyme'
import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'

import Todo from './Todo'

import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('should call "props.toggleIsCompleted" after list item click', () => {
	const toggleSpy = sinon.spy()
	const removeTodoSpy = sinon.spy()

	const output = shallow(
		<Todo
			description={'description'}
			isCompleted={false}
			id={2}
			toggleIsCompleted={toggleSpy}
			removeTodo={removeTodoSpy}
		/>
	)
	output.find(ListItem).simulate('click')

	expect(toggleSpy.callCount).toBe(1)
	expect(toggleSpy.args[0][0]).toBe(2)
})

it('should call "props.removeTodo" after click del icon', () => {
	const toggleSpy = sinon.spy()
	const removeTodoSpy = sinon.spy()

	const output = shallow(
		<Todo
			description={'description'}
			isCompleted={false}
			id={3}
			toggleIsCompleted={toggleSpy}
			removeTodo={removeTodoSpy}
		/>
	)
	output.find(DeleteForeverSharpIcon).simulate('click', {
		// tslint:disable-next-line
		stopPropagation: () => {}
	})

	expect(removeTodoSpy.callCount).toBe(1)
	expect(removeTodoSpy.args[0][0]).toBe(3)
})
