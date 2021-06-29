import * as React from 'react';
import {Container, Header, Progress} from "semantic-ui-react";
import ListTodoElements from "../Components/ListTodoElements";
import AddForm from "../Components/AddForm";
import {useSelector} from "react-redux";

const getProgress = (el) => {
	const length = el.length;
	let active = 0;
	el.map(el => {
		active += el.active
	})
	return Math.round(active / length * 100) ;
}

function ListTodo() {
	const list = useSelector(state => state.todo.list);
	return (
		<Container>
			<Header as='h2'>TODO</Header>
			<AddForm />
			<ListTodoElements />
			<Progress indicating percent={getProgress(list)} />
		</Container>
	);
}

export default ListTodo;
