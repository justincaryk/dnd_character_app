import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import postgraphile from './postgraphile'
import path from 'path'
import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const app = express()

const { PORT } = process.env

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: ``,
  }),
  audience: 'YOUR_API_IDENTIFIER',
  issuer: `localhost`,
  algorithms: ['RS256'],
})

// const authErrors = (err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     console.log(err) // You will still want to log the error...
//     // but we don't want to send back internal operation details
//     // like a stack trace to the client!
//     res.status(err.status).json({ errors: [{ message: err.message }] })
//     res.end()
//   }
// }

// Apply error handling to the graphql endpoint
// app.use('/graphql', authErrors)
// check a jwt
// app.use('/graphql', checkJwt)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(postgraphile)

app.use(express.static(path.join(process.cwd(), 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client/build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`))
