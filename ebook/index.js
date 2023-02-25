import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import authorRouter from './routers/author.js'
import bookRouter from './routers/book.js'
dotenv.config()
// env

const app = express()
mongoose.connect(process.env.EXPRESS_MONGO_DB_CONNECTION_STRING)
app.use(express.json())
app.use('/book', bookRouter)
app.use('/author', authorRouter)

app.listen(process.env.EXPRESS_APP_PORT, () => {
    console.log('server is up....')
})

// [process (program)  - muhit arasinda] elaqe qurur
