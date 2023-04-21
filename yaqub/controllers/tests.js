import Test from "../models/test.js";

export const storeTest = async (req, res) => {
  try {
    const {
      userId,
      Haemoglobin,
      WhiteCell,
      Platelet,
      Sodium,
      Potassium,
      Urea,
    } = req.body;
    const newTest = new Test({
      userId,
      Haemoglobin,
      WhiteCell,
      Platelet,
      Sodium,
      Potassium,
      Urea,
    });
    await newTest.save();
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUserTests = async (req, res) => {
  try {
    const { userId } = req.params;
    const test = Test.find({ userId });
    res.status(200).json(test);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
