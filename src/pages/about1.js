import React from 'react'
import Header from '../components/header/header'

const About1 = () => (
  <div>
    <Header />
    <main className="content">

      <section id="about-title" className="section header" >
        <h1>About Us</h1>
      </section>

      <section id="about-section1" className="section">
        <div className="about-section_details">
          <h2>ResearchKernel</h2>
          <p>A Platform to the Researchers, for the Researchers and by the Researchers.</p>
        </div>
      </section>

      <section id="about-section2" className="section">
        <div className="about-section_details">
          <p>
            Our objective at Research Kernel is to not only provide a platform for you to perform Research but also make it interactive. With Personalised Recommendations, we make the tedious task of searching easier. It's a community-driven interface ensuring that you find the
            Features Available but not limited to:
          </p>
          <ul>
            <li><label htmlFor="list-item-1">Personalised Recommendation:</label> <span id="list-item-1">To show you only what's relevant to you and save time from going through unnecessary Search Results.</span></li>
            <li><label htmlFor="list-item-2">Community Forum:</label> <span id="list-item-2">For you to find like-minded people and find collaborators for your projects.</span></li>
            <li><label htmlFor="list-item-3">Similar Papers:</label> <span id="list-item-3">Can't find what you're looking for? This feature will help you find relevant papers for your research.</span></li>
          </ul>
        </div>
      </section>
    </main>
  </div>
  
)

export default About1
