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


// bookSchema.pre("save", async function (next) {
//     const docCount = await mongoose.model('book').countDocuments({ name: this.name })
//     if (docCount === 0) {
//         next()
//     } else {
//         process.exit(-1)
//     }
// })

bookSchema.post('save', async function () {
    const newBookId = this._id
    await authorModel.findByIdAndUpdate(this.authorId, {
        $push: { bookIds: newBookId }
    })
})

bookSchema.pre('findOneAndDelete', async function (next) {
    const bookId = this.getFilter()._id
    console.log('---')
    const book = await mongoose.model('book').findOne({ _id: bookId }).clone()
    await mongoose.model('author').updateOne({ authorId: book.authorId }, { $pull: { bookIds: bookId } })
    next()
})

// bookSchema.post('findOneAndRemove', async function () {
//     const id = this.getFilter()._id 
//     await mongoose.model('author').findOne({})
//     console.log('---')
// })

/*
1. muellif silinende ona aid olan kitablar silinsin.
2. kitab silinende muellifden silinsin ve eksi
*/


export default model('book', bookSchema);
