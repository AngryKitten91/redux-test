import React, { Component } from 'react';
import { connect } from 'react-redux'
// import ClickMe from 'components/ClickMe';

const actionIncrement = { type: 'INCREMENT' };
const actionDecrement = { type: 'DECREMENT' };
const actionIncrement2 = { type: 'INCREMENT2' };
const actionDecrement2 = { type: 'DECREMENT2' };

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const toAdd = 99;

    setTimeout(() => {
      resolve(toAdd);
    }, 1000);
  });
}

const actionCreatorIncrement3 = (value = 10) => (
  { type: 'INCREMENT3', payload: value }
);

const actionCreatorAsyncIncrement = (dispatch) => {
  fetchData().then((resp) => {
    dispatch(actionCreatorIncrement3(resp));
  })
};

const mapStateToProps = state => ({
  reduxStore: state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(actionIncrement) },
  decrement: () => { dispatch(actionDecrement) },
  increment2: () => { dispatch(actionIncrement2) },
  decrement2: () => { dispatch(actionDecrement2) },
  increment3: (value) => { dispatch(actionCreatorIncrement3(value)) },
  incrementAsync: () => { dispatch(actionCreatorAsyncIncrement) }
})

class App extends Component {
  render() {
    const { reduxStore: { reducer }, increment, decrement, increment2, decrement2, increment3, incrementAsync } = this.props;

    return (
      <div>
        <div>App</div>
        <div>1</div>
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
        <div>2</div>
        <div onClick={increment2}>+</div>
        <div onClick={decrement2}>-</div>
        <div>3</div>
        <div onClick={() => {
          increment3(44)
        }}>{reducer}</div>
        <div onClick={incrementAsync}>async</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
