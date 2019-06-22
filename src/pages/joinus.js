import { Card, Layout, Row, Button } from 'antd'
import React from 'react'
import Header from '../components/header/header'

const { Content, Footer } = Layout

function joinus() {
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
        <h1>Join the Open Source Developemnt Team</h1>
      </div>
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
            <h1>I'm a backend Developer</h1>
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
