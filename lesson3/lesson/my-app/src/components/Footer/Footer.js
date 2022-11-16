import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return <footer className={'footer' + ' ' + theme}>Footer</footer>;
};
