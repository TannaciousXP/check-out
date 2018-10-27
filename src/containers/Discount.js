import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiscount } from '../actions';

class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {

  }
  render() {

    return (
      <div className="section discount">Teehee</div>
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
