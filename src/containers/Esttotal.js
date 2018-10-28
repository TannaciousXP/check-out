import React, { Component } from 'react';
import { connect } from 'react-redux';


import components from '../components';
const { Entry, Expand } = components;

class Esttotal extends Component {
  constructor(props) {
    super(props)
    const { zip } = this.props;
    const [zipCode, tax] = zip.zipCode;
    this.state = {
      zipCode,
      tax
    }
  }

  componentWillMount() {

  }
  render() {
    return (
      <div id="estTotal" className="section estimate">
        <Entry
          description={'Est'}
          dollars={100}
        />
        <Expand isDiscount={false}/>
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

})(Esttotal);
