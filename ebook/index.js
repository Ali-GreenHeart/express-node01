import express from 'express'
import mongoose from 'mongoose'
import bookRouter from './routers/book.js'
import authorRouter from './routers/author.js'
import { mongoConnectUrl } from './utils.js'
import dotenv from 'dotenv'
dotenv.config()
// env

const app = express()
mongoose.connect(mongoConnectUrl)
app.use(express.json())
app.use('/book', bookRouter)
app.use('/author', authorRouter)

app.listen(process.env.EXPRESS_APP_PORT, () => {
    console.log('server is up....')
})

// [process (program)  - muhit arasinda] elaqe qurur
