import React, { Component } from 'react';
import { connect } from 'react-redux';


import components from '../components';
const { Entry } = components;

class Subtotal extends Component {
  constructor(props) {
    super(props)
    const { zip, pickupDis, subTotal, discountAmt, discount } = this.props;
    const [zipCode, tax] = zip.zipCode;
    this.state = {
      discountAmt,
      discount,
      pickupDis,
      subTotal,
      tax,
      zipCode,
    }
  }

  render() {
    const {
      discount,
      pickupDis,
      subTotal,
      tax,
      zipCode,
    } = this.state;
    const { discountAmt } = this.props;
    const subElements = ['subTotal', 'pickUp', 'estTax'];
    return (
      <div id='subTotal' className='section breakdown'>
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
        {
          // Show add discount savings
          discountAmt > 0 ?
          <Entry
            description='Applied discount'
            dollars={-discountAmt}
            isDiscount={true}
            discountCodes={discount}
          /> :
          ''
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discountAmt: state.discountAmt,
    discount: state.discount,
    pickupDis: state.pickupDis,
    subTotal: state.subTotal,
    zip: state.zip
  }
}


export default connect(mapStateToProps, {
})(Subtotal);
