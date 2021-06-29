import React from 'react';
import ElementTodo from "./ElementTodo";
import {List} from "semantic-ui-react";
import {useSelector} from "react-redux";


function ListTodoElements(props) {
	const list = useSelector(state => state.todo.list)
	return (
		<List>
			{list.map(el =>
				<ElementTodo key={el.id} element={el}/>
			)}
		</List>
	);
}

export default ListTodoElements;


