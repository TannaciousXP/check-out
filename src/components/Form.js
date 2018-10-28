import React from 'react';

const Form = ({onclick}) => (
  <form id='enter-code'>
    <input name='enter-code' type='text' placeholder='Enter discount code'/>
    <button type='submit' onClick={onclick}>Apply</button>
  </form>
);

export default Form;