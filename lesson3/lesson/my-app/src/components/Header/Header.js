import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return <header className={'header' + ' ' + theme}>Header</header>;
};
