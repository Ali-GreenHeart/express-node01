import authorModel from "../models/author.js"

export const getAll = async (req, res) => {
    const authors = await authorModel.find()
    res.send(authors)
}
export const getById = async (req, res) => {
    const { id } = req.params
    const author = await authorModel.findById(id)
    res.send(author)
}
export const createAuthor = async (req, res) => {
    const newAuthor = req.body
    const { _id } = await authorModel.create(newAuthor)
    res.send(_id)
}
export const updateAuthor = async (req, res) => {
    const { id } = req.params
    const $set = req.body
    const newAuthor = await authorModel.findByIdAndUpdate(id, { $set }, { new: true })
    res.send(newAuthor)
}

export const deleteAuthor = async (req, res) => {
    const { id } = req.params
    await authorModel.findByIdAndDelete(id)
    res.send('silindi')
}
