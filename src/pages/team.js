import React from 'react'
import Header from '../components/header/header'
import { Card, Row, Col } from 'antd'
import CardWrapper from '../components/card/card.component'
import teamData from '../static/teamData'

const { Meta } = Card

function Team() {
  return (
    <div>
      <Header />
      <div
        style={{
          background: '#ECECEC',
          paddingBottom: 5,
          paddingTop: 20,
          paddingLeft: 150,
        }}
      >
        <h1>Project Collaborators</h1>
      </div>

      <div
        style={{
          background: 'black',
          paddingBottom: 50,
          paddingTop: 100,
          paddingLeft: 150,
        }}
      >
        <Row gutter={16}>
          {teamData.map(
            ({ profileImage, name, description, linkedInUrl, githubUrl }) => (
              <Col span={8}>
                <CardWrapper
                  altImage={name}
                  source={profileImage}
                  title={name}
                  description={description}
                  linkedInUrl={linkedInUrl}
                  githubUrl={githubUrl}
                />
                <br />
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  )
}

export default Team
