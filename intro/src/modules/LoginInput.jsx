import React, { useEffect, useContext } from 'react';
import useInput from '../atoms/useInput';
import { FormContext } from '../contexts/Form';

const LoginInput = () => {
  const [userName, userNameInmput] = useInput({ type: 'text' });
  const { setInputValue } = useContext(FormContext);

  useEffect(
    () => {
      setInputValue('username', userName);
    },
    [userName],
  )

  return (
    <div>
      {userNameInmput}
    </div>
  );
};

export default LoginInput;
