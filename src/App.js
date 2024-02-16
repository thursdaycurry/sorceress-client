import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import CountryAnalysis from './components/CountryAnalysis';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='flex justify-around py-2'>
        <Link to='/'>Home</Link>
        <Link to='/country/list'>Country/list</Link>
        <Link to='/country/analysis'>Country/analysis</Link>
      </div>
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/country/list' element={<Countries />} />
        <Route path='/country/analysis' element={<CountryAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
