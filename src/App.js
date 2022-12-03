import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'src/assets/App.css';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

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
