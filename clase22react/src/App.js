import './App.css';
import './styles/estilos.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react';
import Header from './componentes/layouts/Header';
import Nav from './componentes/layouts/Nav';
import Footer from './componentes/layouts/Footer';

import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';
import Ejemplo4 from './pages/Ejemplo4';
import Ejemplo5 from './pages/Ejemplo5';



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ejemplo1' element={<Ejemplo1 />}></Route>
          <Route path='/ejemplo2' element={<Ejemplo2 />}></Route>
          <Route path='/ejemplo3' element={<Ejemplo3 />}></Route>
          <Route path='/ejemplo4' element={<Ejemplo4 />}></Route>
          <Route path='/ejemplo5' element={<Ejemplo5 />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
