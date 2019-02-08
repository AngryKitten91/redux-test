import React, { Component } from 'react';

export default class ClickMe extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      status: false,
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      status: !prevState.status
    }));
  }

  render() {
    const { status } = this.state;

    return (
      <div>
        <div onClick={this.handleClick}>Click me!</div>
        <div>Status is {status.toString()}</div>
      </div>
    );
  }
}
