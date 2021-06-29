import React, {useState} from 'react';
import {Button, Input} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {addTodo} from "../app/store/todoSlice";

function makeId(length = 5) {
	let result           = '';
	let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for ( let i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}

function AddForm() {
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	
	const addElement = () => {
		dispatch(addTodo({
			name,
			id: makeId(),
			active: false
		}))
		setName('')
	}
	
	const changeName = (event) =>{
		setName(event.target.value)
	}
	return (
		<Input
			label={<Button onClick={() => addElement()}>Add</Button>}
			labelPosition='right'
			placeholder='Add TODO element...'
			value={name}
			onChange={changeName}
		/>
	);
}

export default AddForm;
