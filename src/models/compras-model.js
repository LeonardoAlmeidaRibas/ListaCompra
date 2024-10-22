import db from "../config/db.js";

const comprasSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
});

const Compras = db.model("Compras", comprasSchema);

export default Compras;
