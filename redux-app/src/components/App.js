import React, { Component } from 'react';

import { connect } from 'react-redux'

const actionInc = { type: 'INCREMENT' };

const createActionInc = (value = 0) => ({
  type: 'INCREMENT',
  payload: {
    value
  },
})
// const actionDec = { type: 'DECREMENT' };

class App extends Component {
  render() {
    const { reduxStore, increment } = this.props;

    return <div>
      <div>App</div>
      <div>{reduxStore}</div>

      <div onClick={() => {
        increment(3)
      }}>+3</div>
      <div onClick={() => {
        increment(5)
      }}>+5</div>
      <div onClick={() => {
        increment(7)
      }}>+7</div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  reduxStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => {
    dispatch(createActionInc(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
