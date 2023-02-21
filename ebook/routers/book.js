import { Router } from "express";
import {
    getAll, getById, getByAuthorId, createBook, updateBook, deleteBook
} from "../controllers/author.js";

const r = Router()

r.get('/', getAll)
r.get('/author/:authorId', getByAuthorId)
r.get('/:id', getById)
r.post('/', createBook)
r.put('/:id', updateBook)
r.delete('/:id/:authorId', deleteBook)

export default r;
