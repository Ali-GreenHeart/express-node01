import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imgUrl: String
})
const userModel = mongoose.model('user', userSchema)

export default userModel;
