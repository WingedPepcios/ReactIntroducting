import React from 'react';
import { Form } from '../contexts/Form';
import LoginInput from './LoginInput';

const LoginForm = () => {
  const onSubmit = (values) => {
    const { username } = values;

    if (!username) {
      console.log('Dupa, nie podałeś')
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <LoginInput />
      <button type="submit">Klik</button>
    </Form>
  );
};

export default LoginForm;
