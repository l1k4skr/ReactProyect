import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './componentes/Layout/Layout';
import Home from './Paginas/Home/Home';
// Componentes
import AgendaDeBox from './Paginas/Agendar/AgendaBox/AgendaDeBox';
import EstadoDeBox from './Paginas/Reporte_EstadoBox/EstadoBox/EstadoDeBox';
import AdministrarCentros from './Paginas/Administrar/AdministrarCentros/AdministrarCentros';
import AdministrarMedicos from './Paginas/Administrar/AdministrarMedicos/AdministrarMedicos';

import AdministrarBox from './Paginas/Administrar/AdministrarBox/AdministrarBox';
import AdministrarPacientes from './Paginas/Administrar/AdministrarPacientes/AdministrarPacientes';
import ModificarAgenda from './Paginas/Administrar/ModificarAgenda/ModificarAgenda';
import ReportarEvento from './Paginas/Reporte_EstadoBox/ReportarEvento/ReportarEvento';
import GenerarRegistroInsumo from './Paginas/Insumos/RegistroInsumo/RegistroInsumo';
import ReporteBox from './Paginas/Administrar/HistorialReporte/HistorialReporte';


import MapaBox from './Paginas/Agendar/Mapa_box';
import Login from './Paginas/Inicio_Registro/Login';
import RegistroInsumo from './Paginas/Insumos/RegistroInsumo/RegistroInsumo';


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
              <Route path="/AdministrarMedicos" element={<AdministrarMedicos />} />

              <Route path="/AdministrarBox" element={<AdministrarBox />} />
              <Route path="/AdministrarPacientes" element={<AdministrarPacientes />} />
              <Route path="/ModificarAgenda" element={<ModificarAgenda />} />
              <Route path="/ReportarEvento" element={<ReportarEvento />} />
              <Route path="/GenerarRegistroInsumo" element={<GenerarRegistroInsumo />} />
              <Route path="/ReporteBox" element={<ReporteBox />} />

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
