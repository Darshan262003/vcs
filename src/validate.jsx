import React from "react";
import { Component } from "react";
import PropTypes from "react";

class Validation extends Component
{
    render()
    {
        return(
            <div className="box23">
            <table>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Valid</th>
                </tr>
                <tr>
                    <td>Array</td>
                    <td>{this.props.array1}</td>
                </tr>
                </table>
            </div>
        );
    }
}
Validation.propTypes={
    array1:PropTypes.number,
    boolean1:PropTypes.boolean,
    function1:PropTypes.function,
    string1:PropTypes.string,
    number1:PropTypes.number

}