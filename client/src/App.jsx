import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

//banners
import Layout from "./components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";

// Inicio_Registro
import Registro1 from "./Pages/Inicio_Registro/Registro1.jsx"; // Asegúrate de que la ruta sea correcta
import Login from "./Pages/Inicio_Registro/Login.jsx";

//Administrar
import AdministrarCentros from "./Pages/Administrar/AdministrarCentros/AdministrarCentros.jsx";
import AdministrarMedicos from "./Pages/Administrar/AdministrarMedicos/AdministrarMedicos.jsx";
import AdministrarBox from "./Pages/Administrar/AdministrarBox/AdministrarBox.jsx";
import AdministrarPacientes from "./Pages/Administrar/AdministrarPacientes/AdministrarPacientes.jsx";
import ReporteBox from "./Pages/Administrar/HistorialReporte/HistorialReporte.jsx";

//Insumos
import GenerarRegistroInsumo from "./Pages/Insumos/RegistroInsumo/RegistroInsumo.jsx";

//Reporte_EstadoBox
import ReportarEvento from "./Pages/Reporte_EstadoBox/ReportarEvento/ReportarEvento.jsx";
import EstadoDeBox from "./Pages/Reporte_EstadoBox/EstadoBox/EstadoDeBox.jsx";

// Agendar
import AgendaDeBox from "./Pages/Agendar/AgendaBox/AgendaDeBox.jsx";
import MapaBox from "./Pages/Agendar/Mapa_Box/Mapa_box.jsx";
import Cita_agenda from "./Pages/Agendar/Cita_agenda/Cita_agenda.jsx";
import Registro_sesion from "./Pages/Agendar/Registro_sesion/Registro_sesion.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

// Crear
import CrearCentros from "./Pages/Administrar/AdministrarCentros/CrearCentros.jsx";
import CrearMedicos from "./Pages/Administrar/AdministrarMedicos/CrearMedicos.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Registro1" element={<Registro1 />} />

              {/* banners */}
              <Route path="/home" element={<Home />} />

              {/* Administrar*/}
              <Route
                path="/AdministrarCentros"
                element={<AdministrarCentros />}
              />
              <Route
                path="/AdministrarMedicos"
                element={<AdministrarMedicos />}
              />
              <Route path="/AdministrarBox" element={<AdministrarBox />} />
              <Route
                path="/AdministrarPacientes"
                element={<AdministrarPacientes />}
              />
              <Route path="/ReporteBox" element={<ReporteBox />} />

              {/* Insumos */}
              <Route
                path="/GenerarRegistroInsumo"
                element={<GenerarRegistroInsumo />}
              />

              {/* Reporte_EstadoBox */}
              <Route path="/ReportarEvento" element={<ReportarEvento />} />
              <Route path="/EstadoDeBox" element={<EstadoDeBox />} />

              {/* Agendar*/}
              <Route path="/AgendaDeBox" element={<AgendaDeBox />} />
              <Route path="/Mapa_box" element={<MapaBox />} />
              <Route path="/Cita_agenda" element={<Cita_agenda />} />
              <Route path="/Registro_sesion" element={<Registro_sesion />} />

              {/* crear*/}
              <Route path="/CrearCentros" element={<CrearCentros/>} />
              <Route path="/CrearMedicos" element={<CrearMedicos/>} />

            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

// Exporta la aplicación
export default App;
