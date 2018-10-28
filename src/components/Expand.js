import React, {Component} from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import Form from './Form';

import { applyDiscount, updateDiscount, setTotal } from '../actions'

class Expand extends Component {
  constructor(props) {
    super(props)
    const { isDiscount, discount, total, discountAmt } = this.props;
    this.state = {
      discount,
      discountAmt,
      isDiscount,
      isExpand: false,
      scrollHeight: 0,
      total,
    }
    this.toggleExpand = this.toggleExpand.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleExpand(e) {
    let contentHeight = e.currentTarget.nextElementSibling.scrollHeight;

    this.setState({
      isExpand: !this.state.isExpand,
      scrollHeight: contentHeight,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { applyDiscount, updateDiscount, setTotal } = this.props;
    const { total, discountAmt, discount } = this.state
    let prop = e.currentTarget.form[0].value;
    Object.keys(discount).forEach((key) => {
      if (key === prop) {
        if (discount[key][0] === true) {
          discount[key][0] = false;
          let newTotal = total - (total * discount[key][1]);
          updateDiscount(discount);
          applyDiscount(((total * discount[key][1]) + discountAmt).toFixed(2));
          setTotal(newTotal.toFixed(2));
        }
      }
    })

    e.currentTarget.form[0].value = '';
    this.setState({
      isExpand: !this.state.isExpand,
      discount: discount
    })
  }

  render() {
    let { isDiscount, isExpand, scrollHeight } = this.state;
    let { items } = this.props;
    // Need to toggle see
    let isShown = `${!isExpand ? '+' : '-'}`;
    let seeItems = `${!isExpand ? 'See' : 'Hide'} items details ${isShown}`;
    let applyCode = `${!isExpand ? 'Apply' : 'Hide'} promo code ${isShown}`;

    return (
      <div>
        {
          <button
            className='no-space expand'
            onClick={this.toggleExpand}
            style={{ 'border': `${isExpand ? '1px dotted black' : 'none'}` }}
            >{isDiscount ? applyCode : seeItems}</button>

        }
        <div
          className={`content ${isDiscount ? 'no-space' : ''}`}
          style={{ 'maxHeight': `${isExpand ? scrollHeight : 0}px`}}
        >
        {
          // Return items or form
          !isDiscount ?
          items.map((item, idx) =>
            <Item
              description={item.description}
              key={idx}
              price={item.price}
              qty={item.qty}
              title={item.title}
              url={item.img}
            />
          ) :
          <Form onclick={this.handleSubmit}/>
        }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    discount: state.discount,
    discountAmt: state.discountAmt,
    items: state.items,
    total: state.total,
  }
}

export default connect(mapStateToProps, {
  applyDiscount,
  updateDiscount,
  setTotal,
})(Expand);
