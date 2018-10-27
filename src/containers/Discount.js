import React, { Component } from 'react';
import { connect } from 'react-redux';

class Discount extends Component {
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
      <div>{teehee}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teehee: state.testing
  }
}


export default connect(mapStateToProps, {

})(Discount);
