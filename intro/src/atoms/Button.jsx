import React from 'react';

const Button = ({ onClick, children, value, style }) => {
  return (
    <button type="button" onClick={() => onClick(value)} style={style}>
      {children}
    </button>
  );
};

export default Button;
