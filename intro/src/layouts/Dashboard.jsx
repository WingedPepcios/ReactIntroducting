import React, { useContext, useEffect } from 'react';
import ThemeButton from '../atoms/ThemeButton';
import { Theme } from '../contexts/Theme';
import { http } from '../utils/http';

const Dashboard = () => {
  const { changeTheme } = useContext(Theme);
  
  useEffect(
    () => {
      const getData = async () => {
        const res = await http.get('https://swapi.dev/api/people/1');
        console.log(res);
      }
      getData();
    },
    [],
  )

  return (
    <>
      <ThemeButton />

      <button type="button" onClick={() => changeTheme('light')}>Change to light</button>
      <button type="button" onClick={() => changeTheme('dark')}>Darkness</button>
    </>
  );
};

export default Dashboard;
