import mongoose from 'mongoose'
import { createObjectCsvWriter } from 'csv-writer'
import dotenv from 'dotenv'
import Message from './models/Message.js'

dotenv.config()

async function exportToCSV() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Fetch all messages
    const messages = await Message.find({}).sort({ createdAt: -1 })
    console.log(`Found ${messages.length} messages`)

    if (messages.length === 0) {
      console.log('No messages to export')
      process.exit(0)
    }

    // Prepare CSV writer
    const csvWriter = createObjectCsvWriter({
      path: 'contacts-export.csv',
      header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'message', title: 'Message' },
        { id: 'createdAt', title: 'Submitted At' },
        { id: 'updatedAt', title: 'Updated At' }
      ]
    })

    // Format data for CSV
    const records = messages.map(msg => ({
      name: msg.name,
      email: msg.email,
      message: msg.message,
      createdAt: msg.createdAt.toISOString(),
      updatedAt: msg.updatedAt.toISOString()
    }))

    // Write to CSV
    await csvWriter.writeRecords(records)
    console.log('✅ Successfully exported to contacts-export.csv')

    mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error('Error exporting data:', error)
    process.exit(1)
  }
}

exportToCSV()
