import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './Paginas/Inicio_Registro/Login';
import Home from './Paginas/Home';
import RegistroInsumo from './Paginas/Insumos/RegistroInsumo';
import Navegar from './Navegacion/Navegar';
import AgendaDeBox from './Paginas/Agendar/AgendaDeBox';
import Mapa_box from './Paginas/Agendar/Mapa_box';
import EstadoDeBox from './Paginas/Reporte_EstadoBox/EstadoDeBox';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 

          <Route element={<Navegar />}>
            <Route path='/home' element={<Home/>} />
            <Route path='/AgendaDeBox' element={<AgendaDeBox />} />
            <Route path='/EstadoDeBox' element={<EstadoDeBox />} />
            <Route path='/RegistroInsumo' element={<RegistroInsumo />} />
            <Route path="/mapa-box" element={<Mapa_box />} />
          </Route>
          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
