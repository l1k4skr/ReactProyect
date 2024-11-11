import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    rut: {
      type: String,
      required: true,
      unique: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    especialidad: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Medico", userSchema);
