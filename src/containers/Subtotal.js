import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDiscount } from '../actions';

import components from '../components';
const { Entry } = components;

class Subtotal extends Component {
  componentWillMount() {
    const { discount, setDiscount } = this.props;
    if (JSON.stringify(discount) === JSON.stringify({})){
      setDiscount();
    }
  }
  render() {
    const { discount } = this.props;
    return (
      <div id="subTotal" className="section">
        <Entry
          description={'test'}
          pricing={100}
          secondLine={'Teehee'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discount: state.discount
  }
}


export default connect(mapStateToProps, {
  setDiscount
})(Subtotal);
