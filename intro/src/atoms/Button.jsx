import React from 'react';

const Button = ({ onClick, children, value }) => {
  return (
    <button type="button" onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

export default Button;
