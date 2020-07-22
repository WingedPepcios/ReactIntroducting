import React from 'react';
import literals from '../data/literals'

const Main = ( {logged, setLogged} ) => {
  const login = () => {
    setLogged(!logged);
  }
  return (
    <div>
      {logged ? 'zalogowany' : 'wylogowany'}
      <button onClick={login}>test</button>
    </div>
  );
};

export default Main;
