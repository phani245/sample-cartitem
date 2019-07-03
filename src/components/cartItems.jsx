import React, { Component } from "react";
import Cartitem from "./cartItem";

class Cartitems extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary">
          Reset
        </button>
        {this.props.items.map(product => (
          <Cartitem
            key={product.id}
            onDelete={this.props.onDelete}
            onIncrementitems={this.props.onIncrementitems}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Cartitems;
