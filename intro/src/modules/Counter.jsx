import React, { useState } from 'react';
import Button from '../atoms/Button';

const useCounter = ({ startCounter }) => {
  const [count, setCount] = useState(startCounter);
  
  const struct = (
    <div>
      <strong>Current: {count}</strong>
    </div>
  );

  return [count, setCount, struct];
};

export default useCounter;
