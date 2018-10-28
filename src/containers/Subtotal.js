import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDiscount } from '../actions';

import components from '../components';
const { Entry } = components;

class Subtotal extends Component {
  constructor(props) {
    super(props)
    const { zip } = this.props;
    const [zipCode, tax] = zip.zipCode;
    this.state = {
      zipCode,
      tax
    }
  }
  // componentWillMount() {
  //   const { discount, setDiscount } = this.props;
  //   if (JSON.stringify(discount) === JSON.stringify({})){
  //     setDiscount();
  //   }
  // }



  render() {
    const { zip } = this.props;
    return (
      <div id='subTotal' className='section breakdown'>
        <Entry
          description={'Est Sales Tax'}
          dollars={this.state.tax * 100}
          secondLine={`(Based on ${this.state.zipCode})`}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discount: state.discount,
    zip: state.zip
  }
}


export default connect(mapStateToProps, {
  setDiscount
})(Subtotal);
