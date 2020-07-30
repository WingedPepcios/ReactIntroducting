import React, { useState, useReducer, useContext } from 'react';
import { Theme } from '../contexts/Theme';

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


const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'INCREMENT': 
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET': 
      return { count: 0 };
    default:
      return state;
  }
};


export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  const { setProviderValue, ...providerValue } = useContext(Theme);

  console.log(providerValue);

  return (
    <div>
      <div>Aktualny Stan Counter: {counter.count}</div>

      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>Zwiększ</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>Zmniejsz</button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Zeruj</button>
      <button type="button" onClick={() => setProviderValue({ type: 'DARK' })}>DARK</button>
      <button type="button" onClick={() => setProviderValue({ type: 'LIGHT' })}>LIGHT</button>
    </div>
  );
};

