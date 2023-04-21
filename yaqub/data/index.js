import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const tests = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: "63ef61c53c3cc1f28193695c",
    Haemoglobin: 95,
    WhiteCell: 25,
    Platelet: 50,
    Sodium: 100,
    Potassium: 75,
    Urea: 100,
  },
  {
    id: new mongoose.Types.ObjectId(),
    userId: "63ef61c53c3cc1f28193695c",
    Haemoglobin: 90,
    WhiteCell: 11,
    Platelet: 55,
    Sodium: 35,
    Potassium: 67,
    Urea: 99,
  },
  {
    id: new mongoose.Types.ObjectId(),
    userId: "63ef61c53c3cc1f28193695e",
    Haemoglobin: 80,
    WhiteCell: 35,
    Platelet: 1000,
    Sodium: 190,
    Potassium: 739,
    Urea: 151,
  },
];

export default tests;
