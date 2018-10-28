import React, { Component } from 'react';
import { connect } from 'react-redux';

import components from '../components';
const { Expand } = components

class Discount extends Component {
  constructor(props) {
    super(props);

    let {discount} = this.props
     this.state = {
      discount
    }
  }

  render() {
    return (
      <div id="discount" className="section discount">
        <Expand isDiscount={true}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discount: state.discount,
  }
}

export default connect(mapStateToProps, {
})(Discount);
