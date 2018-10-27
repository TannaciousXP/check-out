import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTest} from './actions'

import containers from './containers';

const { Subtotal } = containers

class App extends Component {
  componentWillMount() {

    // if (teehee ==='heetee') {
    //   console.log(getTest);
    //   getTest();
    // }
  }
  render() {
    let { teehee, getTest } = this.props;
    getTest();
    return (
      <Subtotal />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teehee: state.testing
  }
}


export default connect(mapStateToProps, {
  getTest,
})(App);
