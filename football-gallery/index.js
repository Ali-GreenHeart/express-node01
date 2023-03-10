import express from "express";
import path from "path";
import uploadMiddlware from "./multer.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userModel from "./db/model.js";
dotenv.config()

const app = express()

mongoose.connect(process.env.CONNECTION_STRING, (err) => {
    console.log('err', err)
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve("./index.html"))
})

app.post('/upload', uploadMiddlware.single('photo'), async (req, res) => {
    await userModel.create({
        ...req.body,
        imgUrl: req.file.originalname
    })
    res.send('OK my friend!')
})

app.get('/users', async (req, res) => {
    const users = await userModel.find()
    const html = `
    <h1>${users[0].name}</h1>
    <h1>${users[0].email}</h1>
    <img width="300" height="200" src="userPhotos/${users[0].imgUrl}">
    `
    res.send(html)
})


app.listen(5000, () => {
    console.log('server started up...')
})
