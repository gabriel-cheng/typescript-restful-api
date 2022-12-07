import express from "express";
import User from "../models/User.model";

export default {
    get: async(req: express.Request, res: express.Response) => {
        try {
            const findAll = await User.find();

            res.status(200).json(findAll);
        } catch(err) {
            res.status(400).json({findError: err});
        }
    },
    post: async(req: express.Request, res: express.Response) => {
        const { name, age, email, cpf } = req.body;

        const user = {
            name,
            age,
            email,
            cpf
        };

        try {
            await User.create(user);

            res.status(200).json({message: "Usuário registrado com sucesso!"});
        }catch(err) {
            res.status(400).json({registerError: `Não foi possível registrar o usuário, erro: ${err}`});
        }
    }
};
