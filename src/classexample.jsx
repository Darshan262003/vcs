import React from "react";
import { Component } from "react";
import PropTypes from "react";

class Msg extends Component{
    render()
    {
        return(
        <h1>Welcome to {this.props.name} {this.props.year}</h1>
        );
    }
}
Msg.propTypes={
    name:PropTypes.string,
    year:PropTypes.number
}
export default Msg;