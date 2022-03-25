import React, { useState } from 'react'; // always
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'; // go out of Expenses folder then go to UI folder
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

// each "props" input of Expense function
// has 1 attribute "items". It is because inside App.js, 
// we have <Expenses items={expenses}/>, so props' attr is items.
// When we do props.items, we actually access "expenses" in App.js,
// with 3 attributes: title, amount, date.
// Finally, Card is like a div that covers all things inside.
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); // set filteredYear into selectedYear
  };

  /*
  // We can add the filter method like below (right before the "map" method)
  // but to enhance readability, we need another user-defined filter function
  {(props.items.filter((elem) => elem.date.getFullYear() == filteredYear)).map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
  ))}
  */
  /*
  Example of filter
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  */
  // The below function will return the expenses array (props.items)
  // after filtered ==> filteredExpenses is the new expenses array
  // and we can do: filteredExpenses.map((expense) => (<ExpenseItem> ...))
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // ExpensesFilter has 2 attributes: "selected" and "onChangeFilter" (2 names are selected by the coder)
  // Thus, the input "props" of ExpensesFilter can access "selected" by "props.selected"
  // and access "onChangeFilter" by "props.onChangeFilter"
  
  /*
  Example of map
  const arr1 = [1, 4, 9, 16];
  const map1 = arr1.map(x => x * 2);
  console.log(map1); // [2, 8, 18, 32]
  */

  // note: props.items is the "expenses" dictionary in App.js (see the return of App.js)
  // props.items maps each expense's attributes to each ExpenseItem

  // condition ? yes_output : no_output
  /* if filteredExpenses.length = 0 (no values returned), then say "No expenses found"
  otw, return a bunch of expenses found
    {filteredExpenses.length === 0 ? (
      <p>No expenses found.</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )))
    }
  */

  // we can use "condition && value"
  // if the "condition" is true, then the "value" is executed (by logical AND)
  /*
  {filteredExpenses.length === 0 && <p>No expenses found.</p>}
  {filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  */

  // if dont like the above way of writing codes
  // then do the following, define a variable "expensesContent"
  // that holds one of the conditions
  // then inside the return statement: write {expensesContent}
  // note: this chunk of codes is moved to its separate file (ExpensesList.js)
  /*
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
      />
    ));
  }
  */
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
/*
// The whole thing below is replaced by 
          <ExpenseItem 
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date}
          />

          <ExpenseItem 
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date}
          />

          <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount} 
            date={props.items[2].date}
          ></ExpenseItem>

          <ExpenseItem 
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date}
          ></ExpenseItem>
*/
export default Expenses;