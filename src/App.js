
import './App.css';
import {useState} from 'react';
import ExpenseItem from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

const DummyData = [
  {
    title: "car insurance",
    amount: 289.34,
    date: new Date(2022,2,3),
  },
  {
    title: "toilet clean",
    amount: 159.34,
    date: new Date(2023,4,5),
  },

  
];
function App() {
  const [expenses, setExpense] = useState(DummyData);
  const handleAddExpense = (expenseData) => {
    setExpense((prevExpenses)=>{
      return [...prevExpenses, expenseData];
    })
    
  };


  return (
    <div className="App">
      <NewExpense onAddExpense={handleAddExpense} />
      
      {expenses.map((expense) => (
        <ExpenseItem
        
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
  );
}
export default App;
