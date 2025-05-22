import React from "react";
const products=[
    {id:"p1",name:"Wireless Mouse",price:"$25"},
    {id:"p2",name:"Mechanical keyboard",price:"$80"},
    {id:"p3",name:"USB-C Hub",price:"$40"},
];
const ProductCata=()=>
{
    return(
        <ol>
            {products.map(pro=>(
                <li key={pro.id}>{pro.name} {pro.price}</li>
            )

            )

            }
        </ol>
    );
}
export default ProductCata;