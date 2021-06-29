import React from 'react';
import {Checkbox} from "semantic-ui-react";
import {List} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {removeTodo, updateTodo} from "../app/store/todoSlice";

function ElementTodo(props) {
	const {element} = props;
	const dispatch = useDispatch();
	const changeEvent = (event) => {
		dispatch(updateTodo({
			status: event.target.checked,
			id: element.id
		}))
	}
	
	const removeEvent = () => {
		dispatch(removeTodo(element.id))
	}
	
	return (
		<List.Item>
			<div  className={'flex'}>
				<Checkbox id={element.id} checked={element.active} label={element.name}
				          onChange={changeEvent}/>
				<List.Icon name='close' className={'removeButton'} onClick={removeEvent} />
			</div>
		</List.Item>
	);
}

const areEqual = (prevProps, nextProps) => {
	return prevProps.element.id === nextProps.element.id;
}
export default React.memo(ElementTodo, areEqual);
