import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Super Message !!!",
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ message: "Updated !" });
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h1>I am Home page</h1>
        <p>{message}</p>
        <button onClick={this.increment}>Increment</button>
        <div className="counter">{count}</div>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Home;
