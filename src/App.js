

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component from './Component';
import Recetas from './Recetas';
import DetalleReceta from './DetalleReceta';

function App() {
  return (
    <BrowserRouter>
      <Component />

      <Routes>
        <Route path="/" element={<Recetas />} />
        <Route path="/receta/:id" element={<DetalleReceta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
