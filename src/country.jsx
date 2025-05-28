import React from "react";
const countrylist=[
    {id:"c1",name:"INDIA",capital:"Delhi"},
    {id:"c2",name:"AUSTRALIA",capital:"Sydney"},
    {id:"c3",name:"USA",capital:"Washington"},
    {id:"c4",name:"JAPAN",capital:"Tokyo"},
    {id:"c5",name:"GERMANY",capital:"Berlin"},
];
const Countries=()=>
{
    return(
        <div className="box2">
            <h5>Country and their capital </h5>
        <ul>
            {countrylist.map(pro=>(
                <li key={pro.id}>{pro.name}  => {pro.capital}</li>
            )

            )

            }
        </ul>
        </div>
    );
}
export default Countries;