import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import uploadMulter from './multer.js'

dotenv.config()
const app = express()
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.post('/upload', uploadMulter.single('photo'), (req, res) => {
    res.send('OK')
})

app.listen(process.env.PORT, () => {
    console.log('server is up....')
})



