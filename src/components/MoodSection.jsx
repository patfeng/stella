import { useEffect, useRef } from 'react'
import './MoodSection.css'
import image1a from '../assets/1a.png'
import image1b from '../assets/1b.png'
import image1c from '../assets/1c.png'
import image1d from '../assets/1d.png'
import image2a from '../assets/2a.png'
import image2b from '../assets/2b.png'
import image2c from '../assets/2c.png'
import vert from '../assets/vert.jpg'
import resumestella from '../assets/resumestella.png'

function MoodSection() {
  const imageRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const opacity = entry.intersectionRatio
          entry.target.style.opacity = opacity
        })
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: '0px'
      }
    )

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img)
      }
    })

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          observer.unobserve(img)
        }
      })
    }
  }, [])

  const setImageRef = (index) => (el) => {
    imageRefs.current[index] = el
  }

  return (
    <section className="mood-section">
      <div className="mood-main-container">
        <div className="mood-container">
          <div className="mood-row-top">
            <img ref={setImageRef(0)} src={image1a} alt="Mood 1a" className="mood-image animated-image" />
            <img ref={setImageRef(1)} src={image1b} alt="Mood 1b" className="mood-image animated-image" />
            <img ref={setImageRef(2)} src={image1c} alt="Mood 1c" className="mood-image animated-image" />
            <img ref={setImageRef(3)} src={image1d} alt="Mood 1d" className="mood-image animated-image" />
          </div>
          <div className="mood-row-bottom">
            <img ref={setImageRef(4)} src={image2a} alt="Mood 2a" className="mood-image animated-image" />
            <img ref={setImageRef(5)} src={image2b} alt="Mood 2b" className="mood-image animated-image" />
            <img ref={setImageRef(6)} src={image2c} alt="Mood 2c" className="mood-image animated-image" />
          </div>
        </div>
        <div className="mood-right-section">
          <div className="mood-vertical-images">
            <img ref={setImageRef(7)} src={vert} alt="Vertical 1" className="mood-vert-image animated-image" />
          </div>
          <div className="mood-resume">
            <img ref={setImageRef(8)} src={resumestella} alt="Resume Stella" className="mood-resume-image animated-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoodSection
