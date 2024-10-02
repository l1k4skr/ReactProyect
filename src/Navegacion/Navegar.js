import { Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Navegar = () => {
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand as={Link} to="/home">
          <img 
            src="https://static.wixstatic.com/media/0a8059_2238928883ab4c278a1231c12510b720~mv2.png/v1/fill/w_51,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a8059_2238928883ab4c278a1231c12510b720~mv2.png"
            alt="Logo" 
          />        
        </Navbar.Brand>
        <Nav className="me-auto" >
          <Nav.Link as={Link} to="/AgendaDeBox">Agenda De Box</Nav.Link>
          <Nav.Link as={Link} to="/EstadoDeBox">Estado De Box</Nav.Link>
          <Nav.Link as={Link} to="/Administrar_centros">Administrar centros de Atención</Nav.Link>
          <Nav.Link as={Link} to="/Administrar_medicos">Administrar equipo Médico</Nav.Link>
          <Nav.Link as={Link} to="/Administrar_Box">Administrar Box</Nav.Link>
          <Nav.Link as={Link} to="/Administrar_pacientes">Administrar Pacientes</Nav.Link>
          <Nav.Link as={Link} to="/Modificar_agenda">Modificar Agenda</Nav.Link>
          <Nav.Link as={Link} to="/Reportar_evento">Reportar Evento</Nav.Link>
          <Nav.Link as={Link} to="/RegistroInsumo">Registro de Insumo</Nav.Link>
          <Nav.Link as={Link} to="/Historial_de_reporte">Reporte de Box</Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Navegar;
