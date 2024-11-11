import Medico from "../models/Medicos.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const medico = async (req, res) => {
  const { rut, apellido, nombre, especialidad, email } = req.body;

  try {
    const medicoFound = await Medico.findOne({ rut });

    if (medicoFound)
      return res.status(400).json(["the medico is already in use"]);

    const newMedico = new Medico({
      rut,
      apellido,
      nombre,
      especialidad,
      email,
    });

    const medicoSaved = await newMedico.save();
    const token = await createAccessToken({ id: medicoSaved._id });

    res.cookie("token", token);
    res.json({
      id: medicoSaved._id,
      rut: medicoSaved.rut,
      apellido: medicoSaved.apellido,
      nombre: medicoSaved.nombre,
      especialidad: medicoSaved.especialidad,
      email: medicoSaved.email,
      creatdAt: medicoSaved.createdAt,
      updatedAt: medicoSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Nueva función para obtener un centro médico por ID
export const medicos = async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos); // Devuelve todos los centros
  } catch (error) {
    console.error("Error al buscar Medico:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};
