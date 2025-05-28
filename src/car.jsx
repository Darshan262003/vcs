import React from "react";
function Carinfo(){
    const layout={
        width:"250px",
        color:"black",
        backgroundColor:"lightgrey",
        textAlign:"center",
        padding:"10px",
        border:" 1px solid black",
        borderRadius:"10px",
        
    };
    return(
      <table style={{ borderSpacing: '10px' }}>
        <tr>
            <td style={layout}>
                <h3>Vehicle Information</h3>
                <p><b>Model</b>:Swift Dezire</p>
                <p>Manufacturer:Suzuki</p>
                <p>year:2010</p>
                <p>Fuel Type:petrol</p>
            </td>
            <td style={layout}>
                 <h3>Vehicle Information</h3>
                <p><b>Model</b>:Innova crysta</p>
                <p>Manufacturer:Toyota</p>
                <p>year:2000</p>
                <p>Fuel Type:petrol</p>
            </td>
            <td style={layout}>
                  <h3>Vehicle Information</h3>
                <p>Model:Rapid</p>
                <p>Manufacturer:Skoda</p>
                <p>year:1990</p>
                <p>Fuel:Diesel</p>
            </td>
            <td style={layout}>
                  <h3>Vehicle Information</h3>
                <p>Model:XUV 600</p>
                <p>Manufacturer:Mahendra</p>
                <p>year:2021</p>
                <p>Fuel:Diesel</p>
            </td>
            <td style={layout}>
                  <h3>Vehicle Information</h3>
                <p><b>Model</b>:M5</p>
                <p>Manufacturer:BMW</p>
                <p>year:2021</p>
                <p>Fuel:Diesel</p>
            </td>
        </tr>
      </table>
    );
}
export  default Carinfo;