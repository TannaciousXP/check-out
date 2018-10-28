import React from 'react';

const Item = ({description, price, qty, url, title}) => (
  <div className='item'>
    <div className='img-container'>
      <img className='item-img' src={url} alt={title} />
    </div>
    <div className='item-info'>
      <p>{description}</p>
      <div className='pricing'>
        <p className=''>{`$${price}`}</p>
        <p>{`Qty: ${qty}`}</p>
      </div>
    </div>
  </div>
);

export default Item;