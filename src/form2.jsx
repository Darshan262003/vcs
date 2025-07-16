import React from "react";
import { useState } from "react";

function UserStatusSwitcher()
{
    const [userStatus,setuserStatus]=useState(false);
    let Change=()=>{
        setuserStatus(true)
    }
 
    return(<div>
        
        <h2>User Status</h2>
        {
            !userStatus?(<h3 className="on">ONLINE</h3>):(<h3 className="off">OFFLINE</h3>)
        }
        <button onClick={Change}>
         Go Offline
        </button>
        
        </div>
    );
}
export default UserStatusSwitcher;