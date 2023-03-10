import bookModel from "../models/book.js"

export const getAll = async (req, res) => {
    const books = await bookModel.find()
    res.send(books)
}

export const getById = async (req, res) => {
    const { id } = req.params
    const book = await bookModel.findById(id)
    res.send(book)
}

export const getByAuthorId = async (req, res) => {
    const { authorId } = req.params
    const books = await bookModel.find({ authorId })
    res.send(books)
}
export const createBook = async (req, res) => {
    const newBook = req.body
    const { _id } = await bookModel.create(newBook)
    res.send(_id)
}
export const updateBook = async (req, res) => {
    const { id } = req.params
    const $set = req.body
    const newBook = await bookModel.findByIdAndUpdate(id, { $set }, { new: true })
    res.send(newBook)
}
export const deleteBook = async (req, res) => {
    const { id } = req.params
    await bookModel.findOneAndDelete({ _id: id })
    res.send('silindi')
}
