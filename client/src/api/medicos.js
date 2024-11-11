import axios from "axios";

const API = "http://localhost:4000/api";

export const medicoRequest = (medico) => axios.post(`${API}/medico`, medico)

export const medicosRequest = medico => axios.get(`${API}/medicos`, medico)
