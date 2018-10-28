import React from 'react';

const Entry = ({
    description,
    dollars,
    secondLine = null,
    isEst = false,
    isToolTip = null,
    toolTipText = '' ,
    isStateTax = false,
  }) => {


    return (
    <div className="entry">
      <p className="">
        {description}
        {
          secondLine ?
            <p className="no-margin">
              {secondLine}
            </p>

            : ''
        }
      </p>
        <p className="dollars">{``}</p>
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