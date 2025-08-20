import './ProfileSection.css'

function ProfileSection() {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Stella Zheng</h1>
          <p className="contact-info">647.961.0117<br />stellazheng@gmail.com</p>
        </div>
        
        <div className="profile-content">
          <div className="profile-column">
            <h3>About</h3>
            <p>This is a Product Designer based in Toronto, Canada. She enjoys the creative design process, user experience research, visual aesthetics and storytelling.</p>
            
            <h3>Education</h3>
            <p>Bachelor's Degree of Design<br />OCADU - Ontario College of Art and Design</p>
            
            <h3>Experience</h3>
            <p>July 2017 - Present<br />We work as Senior UX Designer<br />UX Designer for Ux, Web Development...</p>
            
            <h3>Skills</h3>
            <div className="skills-list">
              <span>Creative Suite</span>
              <span>Figma</span>
              <span>Adobe XD</span>
              <span>Sketch</span>
            </div>
          </div>
          
          <div className="profile-images">
            <div className="profile-image-grid">
              <div className="profile-image large">
                <div className="placeholder-image"></div>
              </div>
              <div className="profile-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="profile-image">
                <div className="placeholder-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
