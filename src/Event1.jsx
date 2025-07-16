import React from "react";

function Op()
{
    let Msg=()=>
    {
        alert("This is the msg");
    }
    return(<div>
            
            <button onClick={Msg}>Click Me!</button>
        </div>
    );
}
export default Op;