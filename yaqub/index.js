import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/tests.js";
import helmet, { crossOriginOpenerPolicy } from "helmet";

/*CONFIGURATION*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("comman"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/tests", testRoutes);

/*MONGOOSE CONNECT*/
const Port = process.env.PORT || 6000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(Port, () => console.log(`Database Connected on ${Port}`));

    /* INITIAL DATA */
  })
  .catch((error) => console.log(`${error}`));
