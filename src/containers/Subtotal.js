import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDiscount } from '../actions';

import components from '../components';
const { Entry } = components;

class Subtotal extends Component {
  constructor(props) {
    super(props)
    const { zip, pickupDis, subTotal } = this.props;
    const [zipCode, tax] = zip.zipCode;
    this.state = {
      tax,
      pickupDis,
      subTotal,
      zipCode,
    }
  }

  render() {
    const { tax, subTotal, pickupDis, zipCode} = this.state;
    const subElements = ['subTotal', 'pickUp', 'estTax'];

    return (
      <div id='subTotal' className='section breakdown' ref={this.myRef}>
        {
          subElements.map((ele, idx) => {
            let description = '',
                amt = 0,
                secondLine = null,
                isDiscount = false,
                isPickup = false;

            if (ele === 'subTotal') {
              description = 'Subtotal';
              amt = subTotal;
            } else if (ele === 'pickUp') {
              description = 'Pickup savings';
              amt = -pickupDis;
              isDiscount = true;
              isPickup = true;
            } else {
              description = 'Est Sales Tax'
              amt = tax * subTotal;
              secondLine = `(Based on ${zipCode})`;
            }

           return  <Entry
              description={description}
              dollars={amt}
              isDiscount={isDiscount}
              isPickup={isPickup}
              key={ele+idx}
              secondLine={secondLine}
            />
          })
        }


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discount: state.discount,
    pickupDis: state.pickupDis,
    subTotal: state.subTotal,
    zip: state.zip
  }
}


export default connect(mapStateToProps, {
  setDiscount
})(Subtotal);
