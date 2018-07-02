import React, { Component } from 'react';
import AddTransaction from './AddTransaction';
import Table from './table';
import './App.css';
import moment from 'moment';

class App extends Component {
    state={
      incomes:[
        // {
        //   desc:'Salary',
        //   amount:3000,
        //   time:'20/06/2018 09:28'
        // },
        // {
        //   desc:'Freelance',
        //   amount:1,
        //   time:'20/06/2018 09:28'
        // },
        // {
        //   desc:'Salary',
        //   amount:3000,
        //   time:'20/06/2018 09:28'
        // },
        
      ],
      expenses:[
        // {
        //   desc:'Transport',
        //   amount:3000,
        //   time:'20/06/2018 09:28'
        // },
        // {
        //   desc:'food',
        //   amount:3000,
        //   time:'20/06/2018 09:28'
        // },
        // {
        //   desc:'Salary',
        //   amount:3000,
        //   time:'20/06/2018 09:28'
        // },
      ]
    }

  displayDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
  if(hours < 10){
    hours = '0' + hours;
  }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  
    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
  addIncome = (desc, amount) =>{
    let allIncome = [...this.state.incomes];
     allIncome.push({
      desc,
      amount,
    time:this.displayDateTime()
  });
    this.setState({incomes:allIncome});
  }
  addExpense = (desc,amount) => {
    let allExpenses = [...this.state.expenses];
      allExpenses.push({
        desc:desc,
      amount:amount,
      time:this.displayDateTime()
    });
      this.setState({expenses:allExpenses});
  }
  balance = () => {
   let totalIncome = 0;
   let totalExpense = 0;
   let balance; 
   for(var a=0;a<this.state.incomes.length;a++){
     totalIncome+=parseInt(this.state.incomes[a].amount);
   }
   for(var a=0;a<this.state.expenses.length;a++){
    totalExpense+=parseInt(this.state.expenses[a].amount);
  }
 balance = totalIncome-totalExpense;
 return balance;


  }

  render() {
    
  
    return (
      <div className="App">
          <AddTransaction addIncome={this.addIncome} addExpense={this.addExpense}   />
          <Table  incomes={this.state.incomes} expenses={this.state.expenses}/>
          <h5>Tota balance: {this.balance()}</h5>
      </div>
    );
  }
}

export default App;
