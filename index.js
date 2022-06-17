import express from "express";
import http from "http";
import cors from "cors";
import { routerTest } from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3123;
const app = express();
const server = http.Server(app);

app.use(cors());
app.use("/routes", routerTest);
server.listen(port, () => {
  console.log(`Server Running on Port ${port} `);
});
