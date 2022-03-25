import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
// ExpensesFilter has 2 attributes: "selected" and "onChangeFilter"
// Thus, the input "props" can access "selected" by props.selected
// and access "onChangeFilter" by "props.onChangeFilter"

// dropDownChangeHandler tries to set the new value
// for the input of props.onChangeFilter
// Note that: whenever we use "onChange" as an attribute,
// we'll have a variable "event" and get value by "event.target.value"
	const dropDownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	}
	return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;