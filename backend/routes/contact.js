import { Router } from 'express'
import nodemailer from 'nodemailer'
import Message from '../models/Message.js'

const router = Router()

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'Name, email, and message are required.' })
    }

    const newMessage = await Message.create({ name, email, message })

    // Send email notification
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'anandkumargupta@example.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
      `
    })

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