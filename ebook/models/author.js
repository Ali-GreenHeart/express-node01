import mongoose, { model, Schema } from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    bookIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, { versionKey: false, timestamps: true })

export const authorModel = model('author', authorSchema)
