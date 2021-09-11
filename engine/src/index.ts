import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import postgraphile from './postgraphile'
import path from 'path'

const app = express()

const { SERVER_PORT } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)

app.use(express.static(path.join('../../client/build')))
// This route serves the React app
app.get('/', (req, res) =>
  res.sendFile(path.resolve('../../client/build', 'index.html'))
)

app.listen(SERVER_PORT, () =>
  console.log(`Server ready on port ${SERVER_PORT}`)
)
