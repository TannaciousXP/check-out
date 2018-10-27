import React, { Component } from 'react';
import { connect } from 'react-redux';


import components from '../components';
const { Entry } = components;

class Esttotal extends Component {


  componentWillMount() {
    const { discount, setDiscount } = this.props;
    if (JSON.stringify(discount) === JSON.stringify({})) {
      setDiscount();
    }
  }
  render() {
    return (
      <div id="subTotal" className="section">
        <Entry
          description={'Est'}
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

})(Esttotal);
