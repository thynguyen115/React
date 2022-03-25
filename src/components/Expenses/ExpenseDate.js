// To separate the date format out of the ExpenseItem
import './ExpenseDate.css';
import React from 'react';

// function ExpenseDate(props) { return ... }
const ExpenseDate = (props) => {
	// props.date is a Date object
	// turn month, day, year from date into string
	const month = props.date.toLocaleString('en-US', {month: 'long'}); // month as a word
	const day = props.date.toLocaleString('en-US', {day: '2-digit'}); // date as 2 digits
	const year = props.date.getFullYear(); // year as a full year

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;