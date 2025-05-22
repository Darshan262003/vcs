import React from "react";
import { Component } from "react";
import PropTypes from "react";

class Validation extends Component
{
    render()
    {
        return(
            <div className="box23">
            <table border={2} cellSpacing={2} cellPadding={4}>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Valid</th>
                </tr>
                <tr>
                    <td>String</td>
                    <td>{this.props.string1}</td>
                    <td>{typeof this.props.string1==="string" ?"True":"no"}</td>
                </tr>
                <tr>
                    <td>Number</td>
                    <td>{this.props.number1}</td>
                    <td>{typeof this.props.number1 === "number" ? "true":"false"}</td>

                </tr>
                <tr>
                    <td>Array</td>
                    <td>{this.props.array1}</td>
                    <td>{Array.isArray(this.props.array1) ? "true":"false"}</td>

                </tr>
                   <tr>
                    <td>Boolean</td>
                    <td>{String(this.props.boolean1)}</td>
                    <td>{typeof this.props.boolean1==='boolean' ? "true":"false"}</td>

                </tr>
                
                </table>
            </div>
        );
    }
}
Validation.propTypes={
    array1:PropTypes.array,
   boolean1:PropTypes.boolean,
    //function1:PropTypes.function,
    string1:PropTypes.string,
    number1:PropTypes.number

}
Validation.defaultProps={
string1:"Darshan",
number1:20,
array1:[1,2,3,4],
boolean1:true

};
export default Validation;