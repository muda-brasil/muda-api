import 'dotenv/config'
import cors from 'cors'
import routes from './routes/routes'
import express from 'express'
import mongoose from 'mongoose'
const mongoString = process.env.DATABASE_URI

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})

const app = express()

app.use(cors())
app.disable('x-powered-by')
app.use(express.json())
app.use('/api', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})
