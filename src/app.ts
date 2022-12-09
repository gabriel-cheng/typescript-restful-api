import express from "express";
import router from "./router/index.router";
import mongoConnect from "./database/database";
const app = express();

mongoConnect;
app.use(express.json());

app.use("/", router);

export default app;
