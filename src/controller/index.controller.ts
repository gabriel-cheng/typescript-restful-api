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
};