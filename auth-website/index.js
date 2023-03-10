import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import customizedMulter from './multer.js'
import userModel from './userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authMiddleware from './authMiddleware.js'

const salt = bcrypt.genSaltSync()
export const JWT_SECRET = 'manis'
mongoose.connect('mongodb+srv://node01:uwCZcu2SRq0ZGLAW@cluster0.ndpakvg.mongodb.net/?retryWrites=true&w=majority')

const app = express()
app.use(express.urlencoded())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./pages/index.html'))
})

app.get('/sign-in', (req, res) => {
    res.sendFile(path.resolve('./pages/sign-in.html'))
})
app.get('/sign-up', (req, res) => {
    res.sendFile(path.resolve('./pages/sign-up.html'))
})

app.post('/signup', customizedMulter.single("photo"), async (req, res) => {
    const { username, email, password } = req.body
    const { originalname } = req.file
    const hashedPassword = await bcrypt.hash(password, salt)
    await userModel.create({
        username,
        email,
        password: hashedPassword,
        imgUrl: `photos/${originalname}`
    })
    return res.redirect('/sign-in')
})
app.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        res.status(404).send('Bele user yoxdur')
    }
    const isPasswordRight = await bcrypt.compare(password, user.password)
    if (!isPasswordRight) {
        res.status(401).send('Sen kimsen ay qa?')
    }

    const token = jwt.sign({ email }, JWT_SECRET)

    // res.send( token)
    return res.redirect(`profile/${token}`)
})
app.get('/profile/:token', authMiddleware, async (req, res) => {
    const user = await userModel.findOne({ email: req.userEmail })
    res.send(`
    <h1>${user.username}</h1>
    <h1>${user.email}</h1>
    <img style="object-fit:cover;width:200px;height:200px;border-radius:50%;" src="/${user.imgUrl}" alt="${user.username}" />
    `)
})



app.listen(5050, () => {
    console.log('server is running...')
})


