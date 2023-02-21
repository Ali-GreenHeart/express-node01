import { model } from "mongoose";

export default model('book', {
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
