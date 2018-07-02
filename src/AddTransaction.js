import React from 'react';

class AddTransaction extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();

        //let {addIncome , addExpense} = this.props
       
        let desc =e.target.description.value;
       let amount= e.target.Amount.value;
       if(e.target.transaction.value==="Income"){
        this.props.addIncome(desc,amount);
       }
       else{
        this.props.addExpense(desc,amount);
       }
    
        e.target.description.value="";
        e.target.Amount.value="";
        
       
    }

    render(){
        return  (
            <form className="form" onSubmit={this.handleSubmit}>
                <input  type="text" placeholder="Description" name="description"/>
                <input  type="number" placeholder="Amount" name="Amount"/>
                <select name="transaction" id="mydata">
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                </select>
                <button type="submit">Add</button>
            </form>
        )
    }
  
}
export default AddTransaction;