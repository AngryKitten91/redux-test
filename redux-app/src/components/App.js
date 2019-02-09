import React, { Component } from 'react';

import { createStore } from 'redux';

const actionInc = { type: 'INCREMENT' };
const actionDec = { type: 'DECREMENT' };

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actionInc);
store.dispatch(actionInc);
store.dispatch(actionInc);
store.dispatch(actionInc);

store.dispatch(actionDec);
store.dispatch(actionDec);




class App extends Component {
  render() {
    return <div>
      <div>App</div>
    </div>
  }
}

export default App;
