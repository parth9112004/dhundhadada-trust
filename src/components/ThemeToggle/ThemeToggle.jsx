import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './themeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`glass-toggle-container ${theme}`} onClick={toggleTheme} aria-label="Toggle Theme" title="Toggle Dark/Light Mode">
      <div className="glass-toggle-track">
        <div className="glass-toggle-thumb"></div>
        <div className="glass-toggle-icon">
          <Moon size={22} strokeWidth={2.5} />
        </div>
        <div className="glass-toggle-icon">
          <Sun size={22} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
