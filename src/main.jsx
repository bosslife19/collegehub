import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProfileImageProvider } from './context/ProfileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProfileImageProvider>
    <App />
    <ToastContainer 
     position="top-right"  // Position of the toast
     autoClose={5000}      // Time in milliseconds before the toast auto-closes
     hideProgressBar={false}  // Show or hide the progress bar
     newestOnTop={false}     // Whether the newest toast should appear on top
     closeOnClick={true}     // Whether clicking the toast closes it
     rtl={false}             // Whether the toast should appear in right-to-left direction
     pauseOnFocusLoss={true} // Pause the toast on window focus loss
     draggable={true}        // Allow drag-to-close functionality
     pauseOnHover={true}     // Pause the toast on hover
     theme="light"      
    />
    </ProfileImageProvider>
    </AuthProvider>
    
  </StrictMode>,
)
