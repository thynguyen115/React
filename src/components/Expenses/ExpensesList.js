import React from 'react';
import ExpenseItem from './ExpenseItem'; // because we use ExpenseItem component
import './ExpensesList.css';

// ExpensesList is used inside Expenses
// it has "props" with 1 attribute "items"
// props.items is the same as the array of "expenses" before filtered
const ExpensesList = (props) => {
	// instead of using the variable to return the jsx
	// use if condition to return directly
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
	}
	// always need a return statement that looks like html
	return (
		<ul className="expenses-list">
		{props.items.map((expense) => (
	      <ExpenseItem
	          key={expense.id}
	          title={expense.title}
	          amount={expense.amount}
	          date={expense.date}
	      />
	     ))}
		</ul>
	);
};

export default ExpensesList; 