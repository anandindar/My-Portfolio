import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import contactRouter from './routes/contact.js'

const app = express()

app.use(cors({ 
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true 
}))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRouter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '../frontend/dist')

app.use((err, _req, res, _next) => {
  console.error('Unhandled error', err)
  res.status(500).json({ message: 'Something went wrong. Please try again later.' })
})

app.use(express.static(distPath))

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

export default app