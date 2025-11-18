import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact.js'
import messagesRouter from './routes/messages.js'

const app = express()

app.use(cors({ 
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true 
}))
app.use(express.json())

// Health check endpoint
app.get('/', (_req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Portfolio Backend API',
    endpoints: {
      health: '/health',
      contact: '/api/contact',
      messages: '/api/messages'
    }
  })
})

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// API routes
app.use('/api/contact', contactRouter)
app.use('/api/messages', messagesRouter)

// Error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled error', err)
  res.status(500).json({ message: 'Something went wrong. Please try again later.' })
})

export default app