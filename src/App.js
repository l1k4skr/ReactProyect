import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './componentes/Layout/Layout';
import Home from './Paginas/Home/Home';
import AgendaDeBox from './Paginas/Agendar/AgendaDeBox';
import EstadoDeBox from './Paginas/Reporte_EstadoBox/EstadoDeBox';
import AdministrarCentros from './Paginas/Administrar/AdministrarCentros';
import MapaBox from './Paginas/Agendar/Mapa_box';
import Login from './Paginas/Inicio_Registro/Login';
import RegistroInsumo from './Paginas/Insumos/RegistroInsumo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/AgendaDeBox" element={<AgendaDeBox />} />
              <Route path="/EstadoDeBox" element={<EstadoDeBox />} />
              <Route path="/AdministrarCentros" element={<AdministrarCentros />} />
              <Route path="/RegistroInsumo" element={<RegistroInsumo />} />
              <Route path="/mapa-box" element={<MapaBox />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
