import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()

// Get all messages (for admin) with pagination
router.get('/', async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const limit = Math.min(50, parseInt(req.query.limit) || 20) // Max 50 per page
    const skip = (page - 1) * limit

    // Get total count
    const total = await Message.countDocuments({})
    
    // Fetch paginated messages
    const messages = await Message.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
    
    res.json({
      message: 'Messages retrieved successfully',
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      },
      count: messages.length,
      messages: messages
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    next(error)
  }
})

// Delete a message (for admin)
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    
    const deletedMessage = await Message.findByIdAndDelete(id)
    
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' })
    }
    
    console.log('Message deleted:', id)
    
    res.json({
      message: 'Message deleted successfully',
      data: deletedMessage
    })
  } catch (error) {
    console.error('Error deleting message:', error)
    next(error)
  }
})

export default router
