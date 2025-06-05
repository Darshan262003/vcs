import React from "react";
import { useState } from "react";
function FeedbackPoll()
{
    const[Change,setChange]=useState('');

let Changes=(e)=>
{
  setChange(e);
}


    return(
            <div className="feedbox">
            {
            !Change?( <div >
            <h2>How would you rate our tech support?</h2>
            <button className="b1"onClick={()=>Changes("Good")}>Good</button>
            <button className="b2" onClick={()=>Changes("Neutral")}>Neutral</button>
            <button  className="b3" onClick={()=>Changes("Poor")}>Poor</button>
            </div>
            ):(<h2>Your selected choice is {Change}<br />
              "Thank you for the feedback "
              </h2>)}

            </div>

    );
}
export default FeedbackPoll;