import { Router } from "express";
import { createBook, deleteBook, getAll, getByAuthorId, getById, updateBook } from "../controllers/book.js";

const r = Router()

r.get('/', getAll)
r.get('/author/:authorId', getByAuthorId)
r.get('/:id', getById)
r.post('/', createBook)
r.put('/:id', updateBook)
r.delete('/:id', deleteBook)

export default r;
