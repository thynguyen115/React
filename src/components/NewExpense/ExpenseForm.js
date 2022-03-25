import React, {useState} from 'react';

import './ExpenseForm.css';

// this input "props" has a onSaveExpenseData attribute (see NewExpense)
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// if we dont wanna repeat the above 3 times, we can pass an object {} into useState()
	// i.e. useState({}), then inside {}, we'll have enteredTitle/Amount/Date
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// })

	const titleChangeHandler = (event) => {
		// event is a default argument
		// when console.log(event), we can see a bunch of attributes
		// appearing as a dictionary
		// and we can access event.target.value to get the value of curr userinput
		// console.log(event.target.value);
		
		setEnteredTitle(event.target.value); // if dont use this for each useState, then do following
		// note: ... will pulls out all the key-value pairs and adds them to the new object
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// })

		// but that approach might get a "wrong snapshot", should do the following instead
		// use this if the state update depends on the previous one
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// })
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// })
	};

	const submitHandler = (event) => {
		event.preventDefault(); // built-in JS
		// prevent the default (this request being sent)
		// and since request is not sent, the page will also not reload
		// so we stay in the currently loaded page
		// wo sending request anywhere
		// and we can continue handling this with JS

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate + 'T00:00:00')
		};

		// call this attribute function as specified in NewExpense
		props.onSaveExpenseData(expenseData); 	
			
		// clear inputs
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	//console.log(props);
	const handleCancel = (event) => {
		event.preventDefault();
		props.setNewFormType("default");
	}

	// this will only show the "add expense" button alone
	// when clicking the submit button, the form is submitted
	// onChange will trigger the function passed inside {}
	// after onChange runs, the new entered value is fed into "value"
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input 
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input 
						type="number" 
						min="0.01" 
						step="0.01"
						value={enteredAmount} 
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input 
						type="date" 
						min="2019-01-01" 
						max="2022-12-31" 
						value={enteredDate}
						onChange={dateChangeHandler}
					/>

				</div>

				<div className="new-expense__action">
					<button type="submit" onClick={handleCancel}>Cancel</button>
				</div>

				<div className="new-expense__action">
					<button type="submit">Add Expense</button>
				</div>

			</div>
		</form>
	);
};

export default ExpenseForm;
