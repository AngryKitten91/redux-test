import React, { Component } from 'react';

import { connect } from 'react-redux'

const createActionAdd = (name) => ({
  type: 'ADD',
  payload: {
    name,
    checked: false,
  },
});

const createActionCheck = (name) => ({
  type: 'CHECK',
  payload: {
    name,
  },
});

const createActionRemove = (name) => ({
  type: 'REMOVE',
  payload: {
    name,
  },
});

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      inputValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { inputValue } = this.state;
    const { add } = this.props;

    inputValue && add(inputValue);
  }

  render() {
    const { inputValue } = this.state;
    const { list, check, remove } = this.props;

    return <div>
      <div>App</div>
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input
            value={inputValue}
            onChange={this.handleChange}
            type="text" />
          <button type="submit">
            Add to the list
          </button>
        </form>
      </div>
      <table>
        {list.map(({ name, checked }) => {
          return <tr key={name}>
            <td onClick={() => {
              check(name)
            }}>{name}</td>
            <td>{checked.toString()}</td>
            <td>
              <div onClick={() => {
                remove(name)
              }}>remove</div>
            </td>
          </tr>
        })}
      </table>
    </div>
  }
}

const mapStateToProps = (state) => ({
  list: state,
});

const mapDispatchToProps = (dispatch) => ({
  add: (name) => {
    dispatch(createActionAdd(name));
  },
  check: (name) => {
    dispatch(createActionCheck(name));
  },
  remove: (name) => {
    dispatch(createActionRemove(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
