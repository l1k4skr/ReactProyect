import Centro from "../models/centros.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const centro = async (req, res) => {
  const { sucursal, nbox, direccion } = req.body;

  try {
    const centroFound = await Centro.findOne({ sucursal });

    if (centroFound)
      return res.status(400).json(["the sucursal is already in use"]);

    const newCentro = new Centro({
      sucursal,
      nbox,
      direccion,
    });

    const centroSaved = await newCentro.save();
    const token = await createAccessToken({ id: centroSaved._id });

    res.cookie("token", token);
    res.json({
      id: centroSaved._id,
      sucursal: centroSaved.sucursal,
      nbox: centroSaved.nbox,
      direccion: centroSaved.direccion,
      creatdAt: centroSaved.createdAt,
      updatedAt: centroSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Nueva función para obtener un centro médico por ID
export const centros = async (req, res) => {
  try {
    const centros = await Centro.find();
    res.json(centros); // Devuelve todos los centros
  } catch (error) {
    console.error("Error al buscar centros médicos:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};