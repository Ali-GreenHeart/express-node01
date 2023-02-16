import express from 'express'
import mongoose from 'mongoose'
import { connectionString } from './utils.js'
import productRouter from './api/products.js'

const app = express()
app.use(express.json())
mongoose.connect(connectionString)

// products router
app.use('/products', productRouter)


app.listen(5050, () => {
    console.log('server is up....')
})
