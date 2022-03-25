import React, {useState} from 'react';

import './ExpenseForm.css';

// this input "props" has a onSaveExpenseData attribute (see NewExpense)
const DefaultForm = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		props.setNewFormType("not default");
	}
	return (
		<form onClick={handleClick}>
			<div className='new-expense'>
				<div className="new-expense__action">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default DefaultForm;
