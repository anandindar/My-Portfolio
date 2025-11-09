import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'Name, email, and message are required.' })
    }

    const newMessage = await Message.create({ name, email, message })

    console.log('Contact saved', {
      id: newMessage._id.toString(),
      email: newMessage.email,
      createdAt: newMessage.createdAt
    })

    res.status(201).json({
      message: 'Message received successfully.',
      data: {
        id: newMessage._id,
        name: newMessage.name,
        email: newMessage.email,
        createdAt: newMessage.createdAt
      }
    })
  } catch (error) {
    next(error)
  }
})

export default router
