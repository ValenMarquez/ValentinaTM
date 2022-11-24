import './App.css';
import Header from "./componentes/layouts/Header";
import Nav from "./componentes/layouts/Nav";
import Footer from "./componentes/layouts/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import GaleríaPage from './pages/GaleriaPage';
import ServicioPage from './pages/ServiciosPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/nosotros' element={<NosotrosPage />}></Route>
          <Route path='/servicios' element={<ServicioPage />}></Route>
          <Route path='/galeria' element={<GaleríaPage />}></Route>
          <Route path='/contacto' element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;

