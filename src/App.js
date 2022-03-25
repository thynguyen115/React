import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem'; // without the filename
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'; // whatever we use, we need to import
import DefaultForm from './components/NewExpense/DefaultForm'

// Think of this as a constant outside of the function
const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper',amount: 94.12,date: new Date(2020, 7, 14)},
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
  ];

// function App() {return ...}
const App = () => {
  /* Originally, expenses is this array
  const expenses = [
    {id: 'e1', title: 'Toilet Paper',amount: 94.12,date: new Date(2020, 7, 14)},
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
  ];

  // demo: function pointer, to pass data up (section 4)
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense); // display input
  };
  */

  // set the initial values of "expenses" array to be DUMMY_EXPENSES
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [defaultForm, setNewForm] = useState('default');
  const addExpenseHandler = (expense) => {
    // use the "set" function to connect the new value "expense"
    // to the old values in the array "expenses" (with 3 dots (...) to
    // pull all values of the old array "expenses" out).
    // such as: setExpenses([expense, ...expenses]);
    // but that is not good, should do
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };
  
  if (defaultForm === "default") {
    //setFormLength(formLength + 1);
    return (
      <div>
        <h2>Let's get started!</h2>
        <DefaultForm formType={defaultForm} setNewFormType={setNewForm}/>
        <Expenses items={expenses}/>
      </div>
    );
  }

  // App.js displays the application
  // App.js takes the ExpenseItem.js to display things that file returns.
  // set title of ExpenseItem by the element expenses[0].title above
  // give attribute "items" to the Expenses so that the Expenses in Expenses.js file
  // can have its "props"'s attribute being "items" (which is the variable "expenses" in App.js file)


  // note: since we add an attribute function "onAddExpense" to NewExpense
  // the function NewExpense (in NewExpense.js) now has an input "props"
  // then we can use that "props" to call props.onAddExpense(expense_input)
  //<NewExpense onAddExpense={addExpenseHandler}/>
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} formType={defaultForm} setNewFormType={setNewForm}/>
      <Expenses items={expenses}/>
    </div>
  );
}

//
// The return statement above can be rewritten as the following
// return React.createElement(
//  'div',
//  {},
//  React.createElement('h2', {}, "Let's get started!"),
//  React.createElement(Expenses, { items: expenses })
// );
//

// Meaning
// Return an element called "div", which has no attribute (i.e. {}),
// and has 2 inside elements (h2) and (Expenses)
// Hence, h2 element is passed as the 3rd argument of createElement('div', {}, createElement('h2',...))
// Expenses is passed as the 4th argument of div...
export default App;
