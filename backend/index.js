import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productsRouter from "./routes/productRoutes";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api", productsRouter);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => console.log(`Server running at http://${HOST}:${PORT}`));
