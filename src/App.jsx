import { useEffect } from 'react'
import './App.css'
import MoodSection from './components/MoodSection'
import ProfileSection from './components/ProfileSection'

function App() {
  useEffect(() => {
    const handleWheel = (e) => {
      const container = document.querySelector('.app')
      if (container) {
        // Check if it's a horizontal scroll (trackpad swipe) or vertical scroll (mouse wheel)
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          // Horizontal scroll - use deltaX directly
          container.scrollLeft += e.deltaX
        } else {
          // Vertical scroll - convert to horizontal
          e.preventDefault()
          container.scrollLeft += e.deltaY
        }
      }
    }

    document.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="app">
      <div className="horizontal-container">
        <MoodSection />
        <ProfileSection />
      </div>
    </div>
  )
}

export default App
