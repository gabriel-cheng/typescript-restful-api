import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();

function mongoConnect() {
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wvthnwq.mongodb.net/?retryWrites=true&w=majority`
    )
        .then(() => {
            app.listen(5000, () => {
                console.log("Banco conectado com sucesso! Rodando na porta 5000.");
            });
        })
        .catch(err => {
            console.log(`Database connect error: ${err}`);
        });
}

export default mongoConnect();
