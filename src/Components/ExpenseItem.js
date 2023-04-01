//rafce
import  "./ExpenseItem.css";
import React from "react";
import {useState} from "react";



function ExpenseItem(props){
  //hooks
  const [title, setTitle]=useState(props.title);
  const handletitle = () => {
    //hooks 
    setTitle('updated');
    console.log("clicked");
  };
    return (
      <div className="expense_item">
        <div className="expense_item_date">{props.date.toISOString()}</div>
        <div className="expense_item__discription">
          <h1 className="expense_item__discription_header">{title}</h1>
          <div className="expense_item__discription_price">${props.amount}</div>
          <button onClick={handletitle}>change title</button>
        </div>
      </div>
    );
}
export default ExpenseItem;
