import './App.css';
import { Button } from './components/Button/Button';

function App() {
  const clickHandler = () => {
    console.log(Math.random());
  };

  return (
    <div className="App">
      <Button title={'Name Last'} type={'primary'} click={clickHandler} />
      <Button title={'Petr Olga'} type={'secondary'} />
    </div>
  );
}

export default App;
