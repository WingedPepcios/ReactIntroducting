import React from 'react';
import useInput from '../atoms/Input'

const Settings = () => {
  const [ struct ] = useInput({inputs: [
      {
          type: 'dupa',
      },
      {
          type: 'checkbox',
          name: 'admin'
      },
      {
          type: 'role',
          name: 'role'
      },
      {
          type: 'avatar',
          name: 'avatar'
      },
      {
          type: 'name',
          name: 'name'
      },
      {
          type: 'email',
          name: 'email'
      },
  ]});
  return (
    <div>
        {struct()}
    </div>
  );
};

export default Settings;