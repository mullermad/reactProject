import React from 'react'
import Chart from '../Chart/Chart'

const ExpenseChart = (props) => {
        const chartdatapoints=[
        {label:'jan',value:0},
        {label:'fab',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'july',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'oct',value:0},
        {label:'dec',value:0},
    ]; 

for(const expense of expenses){
        const expenseMonth=expense.date.getMonth();
        chartdatapoints[expenseMonth].value +=expense.amount;
    }
  return (
    <Chart dataPoints={chartdatapoints}/>
  )
}

export default ExpenseChart;