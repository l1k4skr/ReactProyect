import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    sucursal: {
      type: String,
      required: true,
      trim: true,
    },
    nbox: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Centro", userSchema);
