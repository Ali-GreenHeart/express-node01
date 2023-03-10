import { model, Schema } from "mongoose";

const user = new Schema({
    username: String,
    email: String,
    password: String,
    imgUrl: String
}, { versionKey: false })

export default model('user', user)
