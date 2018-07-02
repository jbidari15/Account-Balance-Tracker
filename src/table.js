import React from 'react';
import './App.css';


class Table extends React.Component{
    render(){

        let {incomes, expenses} = this.props;
        let allExpenses =expenses.map((expense,i)=>{
            return  <div key={i} className="Expenses">
                   <div>{expense.desc}</div>
                    <div>{expense.amount}</div>
                   <div>{expense.time}</div>
                  
            </div>
          });
          let allIncomes =  incomes.map((income,i)=>{
            return <div key={i} className="Income">
                     <div>{income.desc}</div>
                     <div>{income.amount}</div>
                     <div>{income.time}</div>
                     
            </div>
            })
        return(
            <div className="table">
                <div className="thead">
                    <div>Income </div>
                    <div>Expenses</div>
             </div>
               <div className="tbody">
                    <ul>{allIncomes}</ul>
                    <ul>{allExpenses}</ul>
                          
                       
                         </div>
              
                
                   </div>
                  
                 
            )
    }
}
export default Table;