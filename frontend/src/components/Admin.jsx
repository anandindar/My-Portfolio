import React, { useState, useEffect } from 'react'
import './Admin.css'

const Admin = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Use full backend URL
  const API_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.replace('/api/contact', '') || 
    'https://my-portfolio-backend-huy6.onrender.com'
  const ADMIN_PASSWORD = 'Tamkuhi@274407' // Change this to your secure password

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
      fetchMessages()
    } else {
      setError('Invalid password')
    }
  }

  const fetchMessages = async () => {
    try {
      setLoading(true)
      setError('')
      
      const response = await fetch(`${API_ENDPOINT}/api/messages`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages')
      }

      const data = await response.json()
      setMessages(data.messages || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching messages:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/api/messages/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete message')
      }

      setMessages(messages.filter(msg => msg._id !== id))
      alert('Message deleted successfully')
    } catch (err) {
      alert('Error deleting message: ' + err.message)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button onClick={fetchMessages} className="refresh-btn">
            Refresh Messages
          </button>
          <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      {loading && <p className="loading">Loading messages...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="messages-stats">
        <div className="stat-card">
          <h3>Total Messages</h3>
          <p className="stat-number">{messages.length}</p>
        </div>
      </div>

      <div className="messages-container">
        {messages.length === 0 && !loading ? (
          <p className="no-messages">No messages yet</p>
        ) : (
          <div className="messages-list">
            {messages.map((msg) => (
              <div key={msg._id} className="message-card">
                <div className="message-header">
                  <div className="message-info">
                    <h3>{msg.name}</h3>
                    <p className="message-email">{msg.email}</p>
                  </div>
                  <div className="message-meta">
                    <span className="message-date">{formatDate(msg.createdAt)}</span>
                    <button 
                      onClick={() => handleDelete(msg._id)} 
                      className="delete-btn"
                      title="Delete message"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="message-body">
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin
