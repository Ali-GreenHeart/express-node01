import { Schema } from "mongoose";

export const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    isExist: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
})

