import React from 'react'
import {useState} from 'react';
import './NewExpenseForm.css';
const NewExpenseForm = (props) => {
  const [amountEntered, setAmountEntered] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


//   const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     amountEntered:'',
//     enteredDate:'',

//   });
  // title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //      ...userInput,
    //      enteredTitle : event.target.value,
    // }
       
    //      );
   // setUserInput((prevValue)=>{return {...prevValue, enteredTitle : event.target.value}})
    
  
  };
  //amount
  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
    //  setUserInput({
    //     ...userInput, 
    //     amountEntered :event.target.value,
    //  });
   // setUserInput((prevValue)=>{return { ...prevValue, amountEntered: event.target.value };})
  };
  //date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({...userInput, 
    //     enteredDate :event.target.value
    // });
    //     enteredDate :event.target.value
    // setUserInput((prevValue) => {
    //   return { ...prevValue };
    // });
  };

const handleSubmit=(event)=>{
    event.preventDefault();

const ExpenseData = {
  title: enteredTitle,
  amount:amountEntered,
  date:new Date(enteredDate),
};
props.onSaveNewExpense(ExpenseData);
setEnteredTitle('');
setAmountEntered('');
setEnteredDate('');
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="newexpense-form-controls">
        <div className="newexpense-form-control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="newexpense-form-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="newexpense-form-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="newexpense-form-action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;