import React, { useContext } from 'react';
import { useTheme } from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === 'light' ? 'yellow' : 'black',
        color: theme === 'light' ? 'yellow' : 'black',
        height: '100px',
      }}
    >
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
};

export default ThemeButton;
