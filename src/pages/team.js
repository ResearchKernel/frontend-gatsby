import React from 'react'
import Header from '../components/header/header'
import { Card } from 'antd'
import { FaMailBulk, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import './css/styles.css'

const Team = () => (
  <div>
    <Header />
    <main className="content">

      <section id="team-title" className="section header" >
        <h1>Team</h1>
      </section>

      <section id="team-section1" className="section-list">
        <div className="team-section_details">
          <h2>Our Team</h2>
          <div className="team-list">
            <Card
            style={{ width: 240, strongadding: 10, margin: 10, borderRadius: 10 }}
            cover={<img alt="avatar of 1" src="" />}
            >
              <h3>Name1</h3>
              <strong><FaMailBulk /> Email</strong><br/>
              <strong><FaLinkedin /> Linkedin</strong><br/>
              <strong><FaTwitter /> Twitter</strong><br/>
              <strong><FaGithub /> Git</strong>
            </Card>
            <Card
            style={{ width: 240, strongadding: 10, margin: 10, borderRadius: 10 }}
            cover={<img alt="avatar of 2" src="" />}
            >
              <h3>Name2</h3>
              <strong><FaMailBulk /> Email</strong><br/>
              <strong><FaLinkedin /> Linkedin</strong><br/>
              <strong><FaTwitter /> Twitter</strong><br/>
              <strong><FaGithub /> Git</strong>
            </Card>
            <Card
            style={{ width: 240, strongadding: 10, margin: 10, borderRadius: 10 }}
            cover={<img alt="avatar of 3" src="" />}
            >
              <h3>Name3</h3>
              <strong><FaMailBulk /> Email</strong><br/>
              <strong><FaLinkedin /> Linkedin</strong><br/>
              <strong><FaTwitter /> Twitter</strong><br/>
              <strong><FaGithub /> Git</strong>
            </Card>
            <Card
            style={{ width: 240, strongadding: 10, margin: 10, borderRadius: 10 }}
            cover={<img alt="avatar of 4" src="" />}
            >
              <h3>Name4</h3>
              <strong><FaMailBulk /> Email</strong><br/>
              <strong><FaLinkedin /> Linkedin</strong><br/>
              <strong><FaTwitter /> Twitter</strong><br/>
              <strong><FaGithub /> Git</strong>
            </Card>
          </div>
        </div>
      </section>
    </main>
  </div>
  
)

export default Team