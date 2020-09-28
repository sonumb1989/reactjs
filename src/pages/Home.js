import React, { Component } from "react";
import Counter from "../component/counter";

class Home extends Component {
  state = {
    message: "Welcome !",
  };

  componentDidMount() {
    this.setState({ message: "Updated !" });
  }

  displayMessage = (type, count) => {
    switch (type) {
      case "+":
        alert(`Increment. Current value: ${count}`);
        break;
      default:
        alert(`Decrement. Current value: ${count}`);
        break;
    }
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>I am Home page</h1>
        <p>{message}</p>
        <Counter
          onChange={this.displayMessage}
          title="I am counter Component"
        />
      </div>
    );
  }
}

export default Home;
