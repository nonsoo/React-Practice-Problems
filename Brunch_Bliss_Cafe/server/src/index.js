import { config } from "dotenv";
import express from "express";
import MenuRoute from "./Routes/menu.js";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));

app.use("/menu", MenuRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
