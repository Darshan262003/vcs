import React from "react";

const TodoList = () =>
{
    const MCA=[
        {rollno:1,studentname:"Chethan",fav:"Maths"},
        {rollno:2,studentname:"Darshan",fav:"OS"},
        {rollno:3,studentname:"Vishwas",fav:"JAVA"},

    ];
    return(
        <ul>
            {MCA.map(task=>(
                <li key={task.rollno}>{task.rollno} {task.studentname} {task.fav}</li>
            ))}
        </ul>
    );
}
export default TodoList;