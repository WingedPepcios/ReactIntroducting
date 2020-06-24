import React, { useState } from 'react';
import literals from '../data/literals';

const ValidatedInput = ({ type, name, id }) => {
  const [ show, setShow ] = useState(false);
  const error = type === 'email' ? literals.errorEmail : literals.errorName;
  
  const validateEmail = (value) => {
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    console.log(re.test(value));
    return re.test(value) ? setShow(false) : setShow(true);
  }
  
  const validateName = (value) => {
    console.log(value);
      return value.indexOf(' ') > -1 ? setShow(false) : setShow(true);
  }

  const validateInput = (e) => {
    const { value } = e.target;

    if (type === 'email') {
        validateEmail(value);
    } else {
        validateName(value);
    }
    return true;
  }

  return (
    <div>
        <input 
            name={name}
            id={id}
            type={type} 
            placeholder={type === 'email' ? literals.emailPlaceholder : literals.namePlaceholder}
            onChange={(e) => {
                validateInput(e);
            }} />
        {show ? <div className="error">{error}</div> : ''}
    </div>
  );
};

export default ValidatedInput;