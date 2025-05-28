import React from "react";
const itemlist1=[
    {id:"1",item:"Dosa"},
    {id:"2",item:"Edli"},
    {id:"3",item:"Vada"},
    {id:"4",item:"Bisibelebath"},
    {id:"5",item:"GheeDosa"},

];
const itemlist2=[
    {id:"1",item:"Gobi"},
    {id:"2",item:"Noodles"},
    {id:"3",item:"Ramen"},
    {id:"4",item:"Sushi"},
    {id:"5",item:"Mexican Soup"},

];
const itemlist3=[
    {id:"1",item:"Sevpuri"},
    {id:"2",item:"Masala Puri"},
    {id:"3",item:"Dhaipuri"},
    {id:"4",item:"Churmuri"},
    {id:"5",item:"Panipuri"},

];

class Restaurant extends React.Component
{
    render()
    {
        return(
            <div className="box3">
                <ul>
                    <li><b>RAMESHWARAM</b> 
                        <ol>
                            {itemlist1.map(ob=>(
                            <li key={ob.id}>{ob.item}</li>
                            )
                        )
                    }
                            
                        </ol>
                    </li>
                    <li><b>NOODLES CORNER</b>
                        <ol>
                            {itemlist2.map(ob=>(
                            <li key={ob.id}>{ob.item}</li>
                            )
                        )
                    }
                            
                        </ol>
                    </li>
                    <li><b>BANGLORE CHATS</b>
                        <ol>
                            {itemlist3.map(ob=>(
                            <li key={ob.id}>{ob.item}</li>
                            )
                        )
                    }
                            
                        </ol>
                    </li>
                </ul>
            </div>

        );
    }
}
export default Restaurant;