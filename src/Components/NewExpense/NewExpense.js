import React from 'react'
import  "./newExpense.css"
import NewExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {

const ExpenseHandler=(enteredExpenseData)=>{
    const ExpenseData={
        ...enteredExpenseData,
        id:Math.random().toString(),
    }
    props.onAddExpense(ExpenseData);
    
}


  return <div className="newexpense">
    <NewExpenseForm onSaveNewExpense={ExpenseHandler}/>
    </div>;
}

export default NewExpense;