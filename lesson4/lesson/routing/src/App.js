import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
