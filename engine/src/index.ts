import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import postgraphile from './postgraphile'

const app = express()

const { PORT } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`))