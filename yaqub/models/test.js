import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    Haemoglobin: {
      type: Number,
    },
    WhiteCell: {
      type: Number,
    },
    Platelet: {
      type: Number,
    },
    Sodium: {
      type: Number,
    },
    Potassium: {
      type: Number,
    },
    Urea: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", testSchema);

export default Test;
