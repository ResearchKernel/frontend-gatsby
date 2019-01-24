import React from 'react'
import Header from '../components/header/header'
import { Card } from 'antd'
import { FaMailBulk, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import './css/common.css'

const Team = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>Team</h1>
        <div className="Card_List">
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
        </div>
        <footer>Copyrights &copy;2019. All Rights Reserved</footer>
      </div>
    </div>
  )
}

export default Team