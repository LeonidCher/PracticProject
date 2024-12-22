// const mongoose  = require("mongoose");
import mongoose from "mongoose";


const card = mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    
})
export default mongoose.model("Сard", card)