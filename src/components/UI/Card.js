import React from 'react';
import './Card.css';

function Card(props) {
	// act as a shell around the ExpenseItem or Expenses content
	// "children" is a reserved keyword, include everything from the opening 
	// and closing tag of your custom component

	const classes = 'card ' + props.className; // dynamically get the className
	return <div className={classes}>{props.children}</div>
}

export default Card;