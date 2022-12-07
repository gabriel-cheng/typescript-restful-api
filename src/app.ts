import express from "express";
import router from "./router/index.router";
import * as dotenv from "dotenv";
import mongoConnect from "./database/database";
const app = express();

dotenv.config();
mongoConnect;
app.use(express.json());

app.use("/", router);

export default app;
