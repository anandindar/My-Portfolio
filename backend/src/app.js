import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact.js'

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRouter)

app.use((err, _req, res, _next) => {
  console.error('Unhandled error', err)
  res.status(500).json({ message: 'Something went wrong. Please try again later.' })
})

export default app
