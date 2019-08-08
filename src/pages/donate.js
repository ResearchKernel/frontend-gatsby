import React, { Fragment } from 'react'
import { Col, Layout, Row } from 'antd'
import Header from '../components/header/header'
const { Content, Footer } = Layout

function donate() {
  return (
    <Fragment>
      <Header />
      <div
        style={{
          background: '#6a8da6',
          textAlign: 'center',
          height: 250,
          display: 'flex',
        }}
      >
        <h1 style={{ textAlign: 'center', display: 'flex', fontSize: '13' }}>
          Donate Us
        </h1>
      </div>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3>Help us to do more</h3>
          </div>

          <Col span={12} offset={6}>
            <p>
              This ia an Open Source, Non Profit project that relies on the
              support of people like you. If everyone reading this can give $5
              per month, we can survive forever and serve to all research
              community out there.
            </p>
          </Col>
          <br />
        </Row>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3>Select you Support</h3>
          </div>

          <Col span={12} offset={6}>
            <ul>
              <li>AWS Credits</li>
              <li>$$</li>
            </ul>
          </Col>
          <br />
        </Row>
      </Content>
      <Footer>Hello</Footer>
    </Fragment>
  )
}

export default donate
