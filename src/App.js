import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './pages/pageMain';
import Page1 from './pages/PageEx1';
import Page2 from './pages/PageEx2';
import Page3 from './pages/PageEx3';
import Page4 from './pages/PageEx4';
import ErroPage from './pages/erroPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<ErroPage />} />
          <Route path="/" element={<PageMain />} />
          <Route path="/OVA&PLS/:id" element={<Page1 />} />
          <Route path="/RVA/:id" element={<Page2 />} />
          <Route path="/Maca/:id" element={<Page3 />} />
          <Route path="/SBV/:id" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
