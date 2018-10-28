import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTotal } from '../actions';

import components from '../components';
const { Entry, Expand } = components;

class Esttotal extends Component {
  constructor(props) {
    super(props)
    const { zip, pickupDis, subTotal, total } = this.props;
    const tax = zip.zipCode[1];
    this.myRef = React.createRef();
    this.state = {
      tax,
      pickupDis,
      total,
      subTotal,
    }
  }

  componentWillMount() {
    // Get the calculation of the total before mounting
    const { tax, subTotal, pickupDis } = this.state;
    const { setTotal } = this.props;
    setTotal((subTotal) + (-pickupDis) + (tax * subTotal));
  }

  render() {
    const { total } = this.props;
    return (
      <div id="estTotal" className="section estimate">
        <Entry
          description={'Est. total'}
          dollars={total}
          isEst = {true}
        />
        <Expand isDiscount={false}/>
      </div>
    );
  }
}
// TODO: get discount amount as well
const mapStateToProps = (state) => {
  return {
    discount: state.discount,
    pickupDis: state.pickupDis,
    subTotal: state.subTotal,
    total: state.total,
    zip: state.zip
  }
}


export default connect(mapStateToProps, {
  setTotal
})(Esttotal);
