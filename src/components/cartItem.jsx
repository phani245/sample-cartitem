import React, { Component } from "react";
class Cartitem extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   console.log("constructor", this);
  // }
  incrementItems = product => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div>
        <span className={this.activeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.incrementItems({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Cartitem;
