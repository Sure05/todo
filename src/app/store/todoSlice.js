import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		list: [
			{
				id: 'aSfEe',
				active: false,
				name: 'test 1'
			},
			{
				id: 'aSPDe',
				active: true,
				name: 'test 2'
			},
		]
	},
	reducers: {
		addTodo: (state, action) => {
			state.list.push(action.payload)
		},
		updateTodo: (state, action) => {
			const {status, id} = action.payload;
			state.list = state.list.map(el =>  el.id === id ? {...el, active: status} : el)
		},
		removeTodo: (state, action ) => {
			state.list = state.list.filter(el => el.id !== action.payload)
		}
	}
});
export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer
