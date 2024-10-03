import React from "react"
import "./Header.module.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header>
        <div>
            <Link to="/">
                <img src="https://static.wixstatic.com/media/0a8059_2238928883ab4c278a1231c12510b720~mv2.png/v1/fill/w_51,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a8059_2238928883ab4c278a1231c12510b720~mv2.png" alt=""/>
            </Link>
        </div>
        <ul>
            <li><Link to="/AgendaDeBox">Agenda de box</Link></li>
            <li><Link to="/EstadoDeBox">Estado de Box</Link></li>
            <li><Link to="/AdministrarCentros">Administrar centros de Atención</Link></li>
            <li><Link href="">Administrar equipo Médico</Link></li>
            <li><Link href="">Administrar Box</Link></li>
            <li><Link href="">Administrar Pacientes</Link></li>
            <li><Link href="">Modificar Agenda</Link></li>
            <li><Link href="">Reportar Evento</Link></li>
            <li><Link href="">Generar registro de insumo</Link></li>
            <li><Link href="">Reporte de Box</Link></li>
        </ul>
    </header>
    )
}

export default Header;