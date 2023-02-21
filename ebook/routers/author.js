import { Router } from 'express'
import { getAll, getById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/author.js'

const r = Router()

r.get('/', getAll)
r.get('/:id', getById)
r.post('/', createAuthor)
r.put('/:id', updateAuthor)
r.delete('/:id', deleteAuthor)

// architect
// lightweight

// reference
export default r;
