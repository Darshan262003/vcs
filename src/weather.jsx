import React from "react";
const Weather=()=>
{
    const cardstyle={
        width:'250px',
        backgroundColor:'lightblue',
        color:'red',
        margin:"10px auto",
        padding:"15px auto",
        textAlign:"center",
        borderRadius:"10px",


    };
    return(
        <div>
            <div className="box">
                <p>Discipline is the bridge between goals and accomplishment.</p>
            </div>
        <div style={cardstyle}>
            <h1>Sunny</h1>
            <p>Temperature:28°C</p>
            <p>Humidity:40%</p>

        </div>
        </div>
    );



};
export default Weather;