import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Bar from './components/Bar';
import Line from './components/Line';
import Pie from './components/Pie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pie" element={<Pie />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/line" element={<Line />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
