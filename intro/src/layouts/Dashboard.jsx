import React, { useContext } from 'react';
import ThemeButton from '../atoms/ThemeButton';
import { Theme } from '../contexts/Theme';

const Dashboard = () => {
  const { changeTheme } = useContext(Theme);
  return (
    <>
      <ThemeButton />

      <button type="button" onClick={() => changeTheme('light')}>Change to light</button>
      <button type="button" onClick={() => changeTheme('dark')}>Darkness</button>
    </>
  );
};

export default Dashboard;
