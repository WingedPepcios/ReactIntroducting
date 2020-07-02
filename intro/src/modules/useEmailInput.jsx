import React, { useState, useEffect } from 'react';
import useInput from '../atoms/useInput';

const useEmailInput = () => {
  const [val, input] = useInput({ type: 'email' });
  const [isValid, setIsValid] = useState(true);

  const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (val) {
      setIsValid(validEmail(val));
    }
  }, [val]);

  const struct = (
    <div className="f-group">
      {input}
      {!isValid ? <span className="--error">E-mail is incorrect</span> : null}  
    </div>
  );

  return [val, isValid, struct];
};

export default useEmailInput;
