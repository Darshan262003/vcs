import React from "react";
import { useState } from "react";

const ExpenseTrackerInput1=()=>
{
    const [name,setName]=useState('');
    const [amount,setAmount]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState(false);

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        setSuccess(false);
        setError('');

        const amountValue=parseFloat(amount);
        if(!name.trim()){
            setError("Expense name is required");
            return;
        }
        if (isNaN(amountValue)|| amountValue<=0)
        {
            setError("Amount must be a positive number");
            return;
        }
        setSuccess(true);
        alert(`Expense "${name}" of amount ₹ ${amountValue.toFixed(2)} added successfully!`);
        setName('');
        setAmount('');
    };
    return(
         <div>
        <form onSubmit={handleSubmit}>
           
                <label>Expense Name:</label><br />
                <input id="expenseName" type="text" value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                <br />
                <label>Amount:</label><br />
                <input type="number"  id="expenseAmount" value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>
                <button type="submit">Add Expense</button>
                
            
        </form>
        </div>

    );
}
export default ExpenseTrackerInput1;