import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Home from './components/Home';

function App() {
  // <CountryTable />;
  return (
    <Router>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/countries'>Countries</Link>
      </div>
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/countries' element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
