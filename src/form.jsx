import React from "react";
import { useState } from "react";

function Newsletter()
{
    const[userName,setuserName]=useState("");
    const[userEmail,setuserEmail]=useState("");
    const[userSubmit,setuserSubmit]=useState(false);

    let Handler=(e)=>{
        e.preventDefault();
        setuserSubmit(true);
    }
    return(
        <div>
            {
                !userSubmit?(
                    <form onSubmit={Handler} className="form1">
                        <h3>Sign up for the Newsletter</h3>
                        <input type="text" value={userName} placeholder="Enter user Name" onChange={(e)=>setuserName(e.target.value)}/>
                         <input type="email" value={userEmail} placeholder="Enter user email" onChange={(e)=>setuserEmail(e.target.value)}/>
                       <br></br>  <button type="submit">Subscribe</button>
                    </form>
                ):(
                    <h2>Thank You For Submission {userName}</h2>
                )
            }
        </div>
    );
}
export default Newsletter;