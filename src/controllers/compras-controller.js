import Compras from "../models/compras-model.js";

export const store = async (req, res) => {
    try {
        const content = await Compras.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const show = async (req, res) => {
    try {
        const content = await Compras.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};