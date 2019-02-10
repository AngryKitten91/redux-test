import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      prev: null,
      next: null,
      baseURL: 'https://swapi.co/api/people',
      current: null
    }

  }

  componentDidMount() {

    const { baseURL } = this.state;
    this.fetchPeopleList(baseURL)

  }

  fetchPeopleList = (url) => {

    const { savePeople } = this.props;

    return fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        const { next, previous: prev, results } = resp;
        // console.log(resp);
        this.setState({ next, prev, current: url })
        savePeople(results);

      })
      .catch(err => this.setState({ err }));
  }

  handleNext = (url) => {
    this.fetchPeopleList(url)
  }



  render() {
    const { store } = this.props;
    const { next, prev, current } = this.state;

    return (
      <div className="App">
        <h1>{current && current.toString()}</h1>
        {store && store.map((elem, i) => {
          const { name, mass, height } = elem
          return <p className="person" key={i}>{`NAME: ${name} WEIGH:${mass} HEIGHT:${height}`}</p>
        })}
        {prev && <p className="butt" onClick={() => {
          this.handleNext(prev);
        }}>PREV</p>}
        {next && <p className="butt" onClick={() => {
          this.handleNext(next);
        }}>NEXT</p>}
      </div>
    );
  }
}


const createAction = (data) => ({
  type: 'SAVE_PEOPLE_LIST',
  payload: data,
});


const mapStateToProps = (state) => ({
  store: state,
});

const mapDispatchToProps = (dispatch) => ({
  savePeople: (data) => {
    dispatch(createAction(data));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
