import express from 'express'
import mongoose from 'mongoose'
import bookRouter from './routers/book.js'
import authorRouter from './routers/author.js'
import { mongoConnectUrl } from './utils.js'

const app = express()
mongoose.connect(mongoConnectUrl)
app.use(express.json()) // req.body json ile yazmisansa, buyur bunu da yaz!
app.use('/book', bookRouter)
app.use('/author', authorRouter)

app.listen(5050, () => {
    console.log('server is up....')
})
