import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 2000
    }
  },
  {
    timestamps: true
  }
)

// Add indexes for better query performance
messageSchema.index({ createdAt: -1 })
messageSchema.index({ email: 1 })

const Message = mongoose.model('Message', messageSchema)

export default Message