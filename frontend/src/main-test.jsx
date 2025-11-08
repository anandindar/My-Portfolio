import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'

// Simple test component
function TestApp() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#3b82f6', fontSize: '3rem' }}>✅ React is Working!</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>If you see this, React is rendering correctly.</p>
      <p style={{ marginTop: '20px' }}>Now loading full portfolio...</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
