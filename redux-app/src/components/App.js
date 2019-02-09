import React, { Component } from 'react';

import { connect } from 'react-redux'

const actionInc = { type: 'INCREMENT' };
// const actionDec = { type: 'DECREMENT' };

class App extends Component {
  render() {
    const { reduxStore, increment } = this.props;

    return <div>
      <div>App</div>
      <div>{reduxStore}</div>
      <div onClick={increment}>+</div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  reduxStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(actionInc)
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
