import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Nilai saat ini: {this.state.count}</p>
        <button onClick={this.incrementCount}>Tambah</button>
        <button onClick={this.decrementCount}>Kurangi</button>
        <p>Pesan dari props: {this.props.message}</p>
      </div>
    );
  }
}

export default Counter;
