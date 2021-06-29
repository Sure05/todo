import * as React from 'react';
import {Container, Header} from "semantic-ui-react";
import ListTodoElements from "../Components/ListTodoElements";
import AddForm from "../Components/AddForm";

function ListTodo() {
	return (
		<Container>
			<Header as='h2'>TODO</Header>
			<AddForm />
			<ListTodoElements />
		</Container>
	);
}

export default ListTodo;
