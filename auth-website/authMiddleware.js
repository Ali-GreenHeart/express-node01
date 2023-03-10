import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './index.js'

function authMiddleware(req, res, next) {
    // const token = req.headers?.authorization?.split(' ')[1]
    const { token } = req.params
    if (!token) {
        return res.send('token yoxdur!')
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.send('token is invalid!')
        }
        req.userEmail = user.email
    })
    next()
}


export default authMiddleware;
