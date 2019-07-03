import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Cartitems from "./components/cartItems";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrementItems = product => {
    const items = [...this.state.items];
    const index = items.indexOf(product);
    items[index] = { ...product };
    items[index].value++;
    this.setState({
      items
    });
  };
  handleReset = () => {
    const reset = this.state.items.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ reset });
  };
  handleDelete = counterId => {
    const items = this.state.items.filter(c => c.id !== counterId);
    this.setState({ items });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalItems={this.state.items.filter(c => c.value > 0).length} />
        <main className="container">
          <Cartitems
            items={this.state.items}
            onDelete={this.handleDelete}
            onIncrementitems={this.handleIncrementItems}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
