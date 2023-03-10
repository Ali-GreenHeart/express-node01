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

authorSchema.pre("findOneAndDelete", async function (next) {
    const authorId = this.getFilter()._id
    await mongoose.model('book').deleteMany({ authorId })
    next()
})

export const authorModel = model('author', authorSchema)
