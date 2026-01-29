import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact.js'
import messagesRouter from './routes/messages.js'

const app = express()

// Configure CORS with flexible origin handling
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:3000'
    ].filter(Boolean) // Remove undefined values
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      // Log for debugging
      console.log('CORS blocked origin:', origin)
      callback(null, true) // Allow all for now to debug
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept']
}

app.use(cors(corsOptions))
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