import React, { useContext } from 'react';
import { Theme } from '../contexts/Theme';
import Button from './Button';

const ThemeButton = () => {
  const { backgroundColor, textColor } = useContext(Theme)
  return <Button style={{ backgroundColor, color: textColor }}>Click Me!</Button>
};

export default ThemeButton;
