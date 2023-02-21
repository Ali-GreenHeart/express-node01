import { model } from "mongoose";

export default model('author', {
    name: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author"
    },
    genre: {
        type: String,
        required: true
    },
}, { versionKey: false, timestamps: true })
