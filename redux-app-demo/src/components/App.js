import React, { Component } from 'react';
import { connect } from 'react-redux'
// import ClickMe from 'components/ClickMe';

const actionIncrement = { type: 'INCREMENT' };
const actionDecrement = { type: 'DECREMENT' };
const actionIncrement2 = { type: 'INCREMENT2' };
const actionDecrement2 = { type: 'DECREMENT2' };

const mapStateToProps = state => ({
  reduxStore: state,
})

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(actionIncrement) },
  decrement: () => { dispatch(actionDecrement) },
  increment2: () => { dispatch(actionIncrement2) },
  decrement2: () => { dispatch(actionDecrement2) },
})

class App extends Component {
  render() {
    const { reduxStore, increment, decrement, increment2, decrement2 } = this.props;

    return (
      <div>
        <div>App</div>
        <div>1</div>
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
        <div>2</div>
        <div onClick={increment2}>+</div>
        <div onClick={decrement2}>-</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
