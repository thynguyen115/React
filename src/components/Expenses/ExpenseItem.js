import ExpenseDate from './ExpenseDate'; // for date data
import './ExpenseItem.css'; // for styling components
import Card from '../UI/Card'; // out of this Expenses folder one step, then go to UI/Card
import React, { useState } from 'react';

// write the function in React as in JS, but return something like html
// input "props": an obj that holds all the values we get for
// the attributes on our custom element
// props refers to the attributes of ExpenseItem tag in Expenses.js
// thus, props has 3 attributes: title, amount, date
// function ExpenseItem(props) { return ... }

const ExpenseItem = (props) => {
	// title = the value stored at props.title (current state value)
	// setTitle = is a function that sets the new title
	// [title, setTitle] is an array destructuring?!
	const [title, setTitle] = useState(props.title); // should not be called outside of a function, or inside a

	// nested function (i.e. should not be called inside clickHandler)

	// Handler: a function which we attached to an event listener
	// so that it's eventually called by React when 
	// the event occurs.
	const clickHandler = () => {
		setTitle('Updated!'); // new title here
		console.log(title);
	};

	//const expenseDate = new Date(2021, 2, 28); // year, month, date;
	// then use .toISOString() to turn date object into a string
	// the old div is <div>{props.date.toISOString()}</div>

	//const expsenseTitle = "Car Insuarance"; // not dynamic, so removed
	//const expenseAmount = 294.67; // ex: <div>{expenseAmount}</div>
	
	// inside the {}, it can run normal javascript code
	// use props.property_name to access the attribute specified inside ExpenseItem in App.js
	// return only 1 root element inside ();

	// must specify: <ExpenseDate date={props.date}/>
	// to make ExpenseDate reach the date attrbiute of App.js
	// Reason: since we use ExpenseDate inside ExpenseItem,
	// we have to first pass that data to ExpenseItem (from App.js: 
	// props from App.js --> props.date in ExpenseItem --> call it "date" in ExpenseDate)
	// then forward it to "ExpenseDate"

	// change <div className="expense-item"> into <Card...
	// as a custom card component
	
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date}/>
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	);
}

export default ExpenseItem;
