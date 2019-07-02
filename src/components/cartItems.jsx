import React, { Component } from "react";
import Cartitem from "./cartItem";

class Cartitems extends Component {
  state = {};
  render() {
    return (
      <div>
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </div>
    );
  }
}

export default Cartitems;
