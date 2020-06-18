import React from 'react';

const UserTab = ({ name }) => {
  return (
    <div>
      <span>User name: </span>
      <strong>{name}</strong>
    </div>
  );
};

export default UserTab;
