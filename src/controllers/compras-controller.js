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

export const index = async (req, res) => {
    try {
        const compras = await Compras.find().exec();
        return res.status(200).json(compras);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const compras = await Compras.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(compras);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const compras = await Compras.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};