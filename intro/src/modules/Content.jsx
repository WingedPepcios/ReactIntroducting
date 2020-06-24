import React, { useState, useEffect } from 'react';
import useCounter from './Counter';
import Button from '../atoms/Button';

// HoC
const Content = () => {
  const [count, setDupa] = useCounter({ startCounter: 0 });
  const [plur, setPlur] = useState('klików');

  useEffect(
    () => {
      if (count === 0) {
        setPlur('klików');
      } else if (count === 1) {
        setPlur('klik');
      } else if (count < 5) {
        setPlur('kliki');
      } else if (count >= 5) {
        setPlur('klików');
      }
    },
    [count],
  );

  return (
    <div>
      <div>{count} {plur}</div>
      <Button onClick={() => setDupa((state) => state + 1)}>Klik</Button>
    </div>
  )
}

export default Content;
