import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './app.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  console.error('Missing MONGODB_URI environment variable. Set it before starting the server.')
  process.exit(1)
}

async function start() {
  try {
    await mongoose.connect(mongoUri)
    console.log('Connected to MongoDB')

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

start()
