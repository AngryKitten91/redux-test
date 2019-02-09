import React, { Component } from 'react';

export default class Clicker extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      condition: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      condition: !prevState.condition,
    }));
  }

  render() {
    const { condition } = this.state;

    return (
      <div>
        <div onClick={this.handleClick}>App</div>
        <div>{condition.toString()}</div>
      </div>
    );
  }
}
