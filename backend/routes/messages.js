import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()

// Get all messages (for admin)
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 })
    
    res.json({
      message: 'Messages retrieved successfully',
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
