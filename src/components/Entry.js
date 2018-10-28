import React from 'react';

import utils from '../util';
const { getDiscount } = utils;

const Entry = ({
    description,
    dollars,
    secondLine = null,
    isDiscount = false,
    discountCodes = null,
    isPickup = false,
  }) => {
    let hiddenText = '';

    if (isDiscount && isPickup) {
      hiddenText = 'Pickup your order in the store help cut cost, and we pass the savings on to you.'
    } else if (isDiscount && !isPickup) {
      hiddenText = `Applied discount(s): ${getDiscount(discountCodes)}`
    }

    return (
      <div className='entry'>
        <p className={`description`}>
          {
            (isDiscount && isPickup) ?
            <span>
              <span className='tooltip'>{description}
                  <span className='no-space tooltiptext'>{`${hiddenText}`}</span>
              </span>
            </span>
            : isDiscount ?
                <span>
                  <span className='tooltip'>{description}
                    <span className='no-space tooltiptext'>{`${hiddenText}`}</span>
                  </span>
                </span>
            : description
          }
          {
            secondLine ?
              <span className="no-space">
                <br/>
                {secondLine}
              </span>

              : ''
          }
          </p>
          <p className={`dollars ${isDiscount ? 'red' : ''} `}>{`$${(dollars)}`}</p>
      </div>
    )
};

export default Entry;