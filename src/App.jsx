import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import Metodo from './pages/Metodo';
import Ventures from './pages/Ventures';
import Contatti from './pages/Contatti';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
