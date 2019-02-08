import React, { Component } from 'react';
import { connect } from 'react-redux'
// import ClickMe from 'components/ClickMe';

const actionIncrement = { type: 'INCREMENT' };
const actionDecrement = { type: 'DECREMENT' };

const mapStateToProps = state => ({
  reduxStore: state,
})

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(actionIncrement) },
  decrement: () => { dispatch(actionDecrement) },
})

class App extends Component {
  render() {
    const { reduxStore, increment, decrement } = this.props;

    return (
      <div>
        <div>App</div>
        <div>{reduxStore}</div>
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
