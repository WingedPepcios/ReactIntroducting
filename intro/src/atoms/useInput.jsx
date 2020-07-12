import React, { useState } from 'react';

const useInput = ({ type, name, startValue }) => {
  const [value, setValue] = useState(startValue);
  return [
    value,
    <input
      className="f-control"
      type={type}
      onChange={(e) => setValue(e.target.value)}
      defaultValue={value}
      name={name}
    />
  ];
};

export default useInput;
