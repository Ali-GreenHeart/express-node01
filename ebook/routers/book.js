import { Router } from "express";
import { bookModel } from "../model.js";

const r = Router()

r.get('/', async (req, res) => {
    const books = await bookModel.find()
    res.send(books)
})
r.get('/author/:authorId', async (req, res) => {
    const { authorId } = req.params
    const books = await bookModel.find({ authorId })
    res.send(books)
})
r.get('/:id', async (req, res) => {
    const { id } = req.params
    const book = await bookModel.findById(id)
    res.send(book)
})
r.post('/', async (req, res) => {
    const newBook = req.body
    const { _id } = await bookModel.create(newBook)
    res.send(_id)
})
r.put('/:id', async (req, res) => {
    const { id } = req.params
    const $set = req.body
    const newBook = await bookModel.findByIdAndUpdate(id, { $set }, { new: true })
    res.send(newBook)
})
r.delete('/:id', async (req, res) => {
    const { id } = req.params
    await bookModel.findByIdAndDelete(id)
    res.send('silindi')
})

export default r;
