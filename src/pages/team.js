import React, { Fragment } from 'react'
import Header from '../components/header/header'
import { Row, Col, Layout } from 'antd'
import CardWrapper from '../components/card/card.component'
import teamData from '../static/teamData'

const { Content, Footer } = Layout
const text_style = {
  webkitfontsmoothing: 'antialiased',
  color: '#123693',
  font: "100 20px/30px 'Deepmind Sans',Helvetica,Arial,sans-serif",
  position: 'relative',
  zindex: 2,
  display: 'inline-block',

}
function Team() {
  return (
    <Fragment>
      <Header text="Research and Development Team @ Researchkernel"/>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' ,color: '#123693'}}
          >
            <h3> What are we solving at Researchkernel?  </h3>
          </div>
          <Col span={12} offset={6}>
            <p
              style={text_style}
            >
              At Researchkernel we have a small team working in big ideas and
              developemnt challenges in Cloud Deployment, System Archicture,
              Machine Learning, Data Science and DevOps Domains. We all are 
              working professionals, working on this project part-time. If you 
              have the skills, have interest in any domain that we are working 
              on and want to be a part of this project, connect with us on Linkedin, 
              Github, Mail or checkout out Join Us section.
            </p>
          </Col>
        </Row>
      </Content>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ display: 'flex', textAlign: 'center' }}>
          <Row gutter={48}>
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
      </Content>
      <Footer>Thos os footer</Footer>
    </Fragment>
  )
}

export default Team
