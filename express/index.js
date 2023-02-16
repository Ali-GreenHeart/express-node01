import express from "express";
import users from "./users.js";
import path from "path"
const app = express()

// 
app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is home page')
})

app.get('/users', (req, res) => {
    res.send(users)
})
// signature
app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    console.log(req.params)
    const user = users.find(({ name }) => name === _id)
    res.send(user)
})
app.post('/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.status = 200
    res.end("new User has been created")
})
app.get('/ali', (req, res) => {
    res.sendFile(path.resolve('./ali.html')) // absolute path olmalidir
})


app.listen(5000, () => {
    console.log('server is up...')
})
