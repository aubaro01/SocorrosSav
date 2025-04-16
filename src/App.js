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
import Admin from './Admin/index';
import Ex4 from './Admin/Ex4';
import Ex1 from './Admin/Ex1';
import Ex2 from './Admin/Ex2';
import Ex3 from './Admin/Ex3';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<ErroPage />} />
          <Route path="/" element={<PageMain />} />
          <Route path="/OVA&PLS" element={<Page1 />} />
          <Route path="/RVA" element={<Page2 />} />
          <Route path="/Maca" element={<Page3 />} />
          <Route path="/SBV" element={<Page4 />} />

          <Route path="/SBV/Admin" element={<Ex4 />} />
          <Route path="/Maca/Admin" element={<Ex3 />} />
          <Route path="/RVA/Admin" element={<Ex2 />} />
          <Route path="/OVA&PLS/Admin" element={<Ex1 />} />
          <Route path="/Admin" element={<Admin />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
