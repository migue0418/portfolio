import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Curriculum from './components/pages/Curriculum';
import Portfolio from './components/pages/Portfolio';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <>
      <Router basename='/portfolio'>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='*' element={<NotFound/>} />
          {/* <Route path='/contacto' element={<Contacto/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
