import React from 'react';

const Entry = ({
    description,
    dollars,
    secondLine = null,
    isDiscount = false,
    isEst = false,
    isPickup = false,
  }) => {
    let hiddenText = '';

    if (isDiscount && isPickup) {
      hiddenText = 'Pickup your order in the store help cut cost, and we pass the savings on to you.'
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
            :
            description
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

/*

      {
        `
        ${description}
        ${secondLine ? secondLine : ''}
        `
      }
 */

export default Entry;