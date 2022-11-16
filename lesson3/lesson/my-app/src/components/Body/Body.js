import styles from './Body.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Kvadrat } from '../Kvadrat/Kvadrat';

export const Body = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  };

  useEffect(() => {
    setColors(createColorsArray());
  }, []);

  const randomNumber = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };

  const createColorsArray = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(randomColor());
    }
    return arr;
  };

  return (
    <main className={`${styles.main} ${theme === 'black' ? styles.black : ''}`}>
      <h1>{colors[randomNumber(0, 2)]}</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        {colors.map((el) => (
          <Kvadrat key={el} color={el} />
        ))}
      </div>
    </main>
  );
};
