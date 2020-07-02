import React from 'react';
import useInput from '../atoms/useInput';
import useEmailInput from './useEmailInput';

const Settings = () => {
  const [emailValue, isValidEmail, emailInput] = useEmailInput();

  console.log(emailValue, isValidEmail);

  return (
    <div>
      {emailInput}
    </div>
  );
};

export default Settings;
