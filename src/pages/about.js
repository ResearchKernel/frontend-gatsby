import React from 'react'
import Header from '../components/header/header'
import './css/common.css'

const About = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>About</h1>
        <h2>ResearchKernel</h2>
        A Platform to the Researchers, for the Researchers and by the Researchers. Our objective at Research Kernel is to not only provide a platform for you to perform Research but also make it interactive. With Personalised Recommendations, we make the tedious task of searching easier. It's a community-driven interface ensuring that you find the
        Features Available but not limited to:
        <ol>
          <li>Personalised Recommendation: To show you only what's relevant to you and save time from going through unnecessary Search Results.</li>
          <li>Community Forum: For you to find like-minded people and find collaborators for your projects.</li>
          <li>Similar Papers: Can't find what you're looking for? This feature will help you find relevant papers for your research.</li>
        </ol>
        <footer>Copyrights &copy;2019. All Rights Reserved</footer>
      </div>
    </div>
  )
}

export default About