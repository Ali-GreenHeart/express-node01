import { Router } from 'express'
import { authorModel } from '../model.js'

const r = Router()

r.get('/', async (req, res) => {
    const authors = await authorModel.find()
    res.send(authors)
})
r.get('/:id', async (req, res) => {
    const { id } = req.params
    const author = await authorModel.findById(id)
    res.send(author)
})
r.post('/', async (req, res) => {
    const newAuthor = req.body
    const { _id } = await authorModel.create(newAuthor)
    res.send(_id)
})
r.put('/:id', async (req, res) => {
    const { id } = req.params
    const $set = req.body
    const newAuthor = await authorModel.findByIdAndUpdate(id, { $set }, { new: true })
    res.send(newAuthor)
})
r.delete('/:id', async (req, res) => {
    const { id } = req.params
    await authorModel.findByIdAndDelete(id)
    res.send('silindi')
})


export default r;
