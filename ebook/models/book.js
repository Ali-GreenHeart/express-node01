import mongoose, { model, mongo, Schema } from "mongoose";
import { authorModel } from './author.js'

const bookSchema = new Schema({
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


bookSchema.post('save', async function () {
    const newBookId = this._id
    await authorModel.findByIdAndUpdate(this.authorId, {
        $push: { bookIds: newBookId }
    })
})

bookSchema.pre('findOneAndDelete', async function (next) {
    const bookId = this.getFilter()._id
    const book = await mongoose.model('book').findOne({ _id: bookId }).clone()
    if (!book) {
        next(new Error('bele kitab yoxdur...'))
    }
    await mongoose.model('author').updateOne({ _id: book.authorId }, { $pull: { bookIds: bookId } })
    next()
})

export default model('book', bookSchema);
