import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	// onSaveExpenseData: this name is created by user 
	// (and to specify that it's a function pointer)
	// and will trigger the function saveExpenseDataHandler
	// the argument "enteredExpenseData" is from ExpenseForm.js
	// specifically, "expenseData" is input argument to the function "onSaveExpenseData"
	// this input argument is also an input for "saveExpenseDataHandler"
	// because "onSaveExpenseData" and "saveExpenseDataHandler" are the same
	const saveExpenseDataHandler = (enteredExpenseData) => {
		// 3 dots (...) pulls out all the key-value pairs in enteredExpenseData
		// which are const expenseData = {
		//	title: enteredTitle,
		//	amount: enteredAmount,
		//	date: new Date(enteredDate)
		//}; // from the ExpenseForm
		const expenseData = { 
			...enteredExpenseData,
			id: Math.random().toString()
		};

		// note: since we add an attribute function "onAddExpense" to NewExpense in App.js
	  	// the function NewExpense (in NewExpense.js) now has an input "props"
	  	// then we can use that "props" to call props.onAddExpense(expense_input)
		props.onAddExpense(expenseData);

	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formType={props.formType} setNewFormType={props.setNewFormType}/>
		</div>
	);
};

export default NewExpense;
