import express from "express";
import { storeTest, getUserTests } from "../controllers/tests.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/tests", verifyToken, storeTest);
router.get("/", verifyToken, getUserTests);

export default router;
