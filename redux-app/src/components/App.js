import React, { Component } from 'react';

import { connect } from 'react-redux'

// const actionInc = { type: 'INCREMENT' };
// const actionDec = { type: 'DECREMENT' };

class App extends Component {
  render() {
    const { reduxStore } = this.props;

    return <div>
      <div>App</div>
      <div>{reduxStore}</div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    reduxStore: state,
  }
}

export default connect(mapStateToProps)(App);
