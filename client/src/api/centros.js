import axios from "axios";

const API = "http://localhost:4000/api";

export const centroRequest = (centro) => axios.post(`${API}/centro`, centro)

export const centrosRequest = centro => axios.get(`${API}/centros`, centro)
