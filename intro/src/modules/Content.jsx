import React from 'react';
import UserTab from '../atoms/UserTab';

const Content = ({ heads }) => (
  <div>
    {heads.map((name) => <UserTab name={name} />)}
  </div>
);

export default Content;
