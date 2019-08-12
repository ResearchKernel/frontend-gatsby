import { Card, Layout, Row, Button, Col } from 'antd'
import React from 'react'
import Header from '../components/header/header'

const { Content, Footer } = Layout

function joinus() {
  return (
    <div>
      <Header />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3> Join Open Source Project </h3>
          </div>
          <Col span={12} offset={6}>
            <p>
              As an organisation we have multipule Open source project that
              might look interesting to you. Below are the list of the projects
              that we have @ Researckernel, however we are not limited to these,
              if you have some proposal or any addon feature that potentailly be
              useful for the society then fill the form and raise a PR in the
              Github Page of the organisation or start a thread at our Dicussion
              Forum.
            </p>
          </Col>
        </Row>
      </Content>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I am a Frontend Developer</h1>
            <p>
              We use React.js and Ant Design for our Frontend Development. If
              you have the same stack you can connect with us by filling the
              form bellow.
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I'm a Node.js Developer</h1>
            <p>
              Fill your details and we'll connect with you, Thanks for your
              support
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I'm a Technical Contenet Writer</h1>
            <p>
              Fill your details and we'll connect with you, Thanks for your
              support
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I'm a NLP Engineer</h1>
            <p>
              Fill your details and we'll connect with you, Thanks for your
              support
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I'm work on Chatbots</h1>
            <p>
              Fill your details and we'll connect with you, Thanks for your
              support
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I am a Frontend Developer</h1>
            <p>
              We use React.js and Ant Design for our Frontend Development. If
              you have the same stack you can connect with us by filling the
              form bellow.
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <div
          style={{
            background: '#ECECEC',
            paddingBottom: 5,
            paddingTop: 20,
            paddingLeft: 150,
          }}
        >
          <h1>Join the Open Source Research Team</h1>
        </div>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I do research on Renewable Energy</h1>
            <p>
              We are planing to combine the power of multipule domains and slve
              the problem that matters
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>
              I do research on Natural Language Processing and Understanding
            </h1>
            <p>
              We are planing to combine the power of multipule domains and slve
              the problem that matters
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
        <br />
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I Have an Idea to work on.</h1>
            <p>
              We are planing to combine the power of multipule domains and slve
              the problem that matters. If you have something that can change
              the future. Connect with us.
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
      </Content>
      <br />
      <Footer>
        <Row gutter={16}>
          <Card style={{ width: 'Auto' }} hoverable>
            <h1>I'm a Footer</h1>
            <p>
              Fill your details and we'll connect with you, Thanks for your
              support
            </p>
            <Button>Form</Button>
          </Card>
        </Row>
      </Footer>
    </div>
  )
}

export default joinus
