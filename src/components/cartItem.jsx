import React, { Component } from "react";
class Cartitem extends Component {
  // state = {
  //   counter: this.props.product.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  // constructor() {
  //   super();
  //   console.log("constructor", this);
  // }
  // incrementItems = product => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // };
  render() {
    return (
      <div>
        <span className={this.activeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrementitems(this.props.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  activeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.product;
    return value === 0 ? "Zero" : value;
  }
}

export default Cartitem;
