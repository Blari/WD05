import { useRef, useState } from 'react';
import './App.css';

function App() {
  const appRef = useRef();
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [absolute, setAbsolute] = useState(false);

  const handlerMouseEnter = () => {
    const width = appRef.current.clientWidth;
    const height = appRef.current.clientHeight;
    setAbsolute(true);
    setTop(random(height));
    setLeft(random(width));
  };

  const random = (int) => Math.floor(Math.random() * int);

  return (
    <div className="App" ref={appRef}>
      <h2>Вы довольны своей ЗП?</h2>
      <div className="btn-wrapper">
        {' '}
        <button onClick={() => alert('Я так и знал!')}>Да</button>
        <button
          style={{
            position: absolute ? 'absolute' : 'none',
            top,
            left,
          }}
          className={'no'}
          onMouseEnter={handlerMouseEnter}
        >
          Нет
        </button>
      </div>
    </div>
  );
}

export default App;
