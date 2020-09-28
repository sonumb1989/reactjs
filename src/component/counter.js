import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(prevProp);
    console.log(prevState);
  }

  increment = () => {
    const { count } = this.state;
    const { onChange } = this.props;
    this.setState({ count: count + 1 });
    onChange("+", count);
  };

  decrement = () => {
    const { count } = this.state;
    const { onChange } = this.props;
    this.setState({ count: count - 1 });
    onChange("-", count);
  };

  render() {
    const { count } = this.state;
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.increment}>Increment</button>
        <div className="counter">{count}</div>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
