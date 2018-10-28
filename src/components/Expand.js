import React, {Component} from 'react';
import { connect } from 'react-redux';

class Expand extends Component {
  constructor(props) {
    super(props)
    const { discount, isDiscount } = this.props;
    this.state = {
     discount,
     isDiscount,
     isExpand: false,
     scrollHeight: 0,
    }
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand(e) {
    let contentHeight = e.currentTarget.nextElementSibling.scrollHeight;

    this.setState({
      isExpand: !this.state.isExpand,
      scrollHeight: contentHeight,
    })
  }

  render() {
    let { isDiscount, discount, isExpand, scrollHeight } = this.state;
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
          Hello!!!!! my name is testing!
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    discount: state.discount,
    items: state.items
  }
}


export default connect(mapStateToProps, {

})(Expand);
