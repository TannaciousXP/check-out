import React, { Component } from 'react';
import { connect } from 'react-redux';

class Subtotal extends Component {
  componentWillMount() {

    // if (teehee ==='heetee') {
    //   console.log(getTest);
    //   getTest();
    // }
  }
  render() {

    return (
      <div id="sub-total" class="section">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teehee: state.testing
  }
}


export default connect(mapStateToProps, {

})(Subtotal);
