import express from "express";
import User from "../models/User.model";

export default {
    delete: async(req: express.Request, res: express.Response) => {
        const id = req.params.id;

        const user = await User.findOne({_id: id});

        if(!user) {
            res.status(422).json({UsrDeleteErr: "O usuário não foi encontrado!"});
            return;
        }

        try {
            await User.deleteOne({_id: id});

            res.status(200).json({Message: "O usuário foi deletado com sucesso!"});
        } catch(err) {
            res.status(500).json({UsrDeleteErr: err});
        }
    },
    patch: async(req: express.Request, res: express.Response) => {
        const id = req.params.id;

        const { name, age, email, cpf } = req.body;

        const user = {
            name,
            age,
            email,
            cpf
        };

        try {
            const updateUser = await User.updateOne({_id: id}, user);

            if(updateUser.matchedCount === 0) {
                res.status(422).json({updtFindUsrErr: "Usuário não encontrado!"});
            }

            res.status(200).json(user);
        } catch(err) {
            res.status(400).json({updtUserErr: err});
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
    },
    getById: async(req: express.Request, res: express.Response) => {
        const id = req.params.id;

        try {
            const userFindedById = await User.findOne({_id: id});

            if(id) {
                res.status(200).json(userFindedById);
            } else {
                res.status(404).json({userFindErr: "Usuário não encontrado!"});
            }
        } catch(err) {
            res.status(400).json({findUserErr: `Não foi possível encontrar o usuário. ${err}`});
        }
    },
    get: async(req: express.Request, res: express.Response) => {
        try {
            const usersFinded = await User.find();

            res.status(200).json(usersFinded);
        } catch(err) {
            res.status(400).json({findError: err});
        }
    }
};
