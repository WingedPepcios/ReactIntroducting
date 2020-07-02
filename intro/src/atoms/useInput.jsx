import React, { useState } from 'react';

const useInput = ({ type, startValue }) => {
  const [value, setValue] = useState(startValue);
  return [value, <input className="f-control" type={type} onChange={(e) => setValue(e.target.value)} defaultValue={value} />];
};

export default useInput;
