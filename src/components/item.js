import React from 'react';

const Entry = ({ description, pricing, secondLine }) => (
  <div className="entry">
    <p className="">
      {description}
      {
        secondLine.length > 0 ?
          (<br />) : ''
      }
      {
        secondLine.length > 0 ?
          secondLine : ''
      }

    </p>
    <p className="pricing">${pricing}</p>
  </div>
);


export default Entry;