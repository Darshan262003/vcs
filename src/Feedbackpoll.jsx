import React from "react";
import { useState } from "react";
function FeedbackPoll()
{
    const[Change,setChange]=useState(true);

let Changes=()=>
{
  setChange(false);
}


    return(
            <div className="feedbox">
            {
            Change?( <div >
            <h3>How would you rate our tech support?</h3>
            <button onClick={Changes}>{Change}Good</button>
            <button onClick={Changes}>Neutral</button>
            <button onClick={Changes}>Poor</button>
            </div>
            ):(<h2>"Thank you for feedback"</h2>)}

            </div>

    );
}
export default FeedbackPoll;