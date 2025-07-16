import React, { useState } from "react";

function Op1()
{
    const[Counter,setCounter]=useState(0);
    let Increment=()=>setCounter(Counter+1);
    let Decrement=()=>setCounter(Counter-1);
     let Reset=()=>setCounter(0);

return(
    <div>
        <p>Count is {(Counter)}</p>
        <button onClick={Increment}>Increment</button>
         <button onClick={Decrement}>Decrement</button>
          <button onClick={Reset}>Reset</button>
    </div>
);

}
export default Op1;