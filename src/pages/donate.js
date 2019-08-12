import React, { Fragment } from 'react'
import { Col, Layout, Row } from 'antd'
import Header from '../components/header/header'
const { Content, Footer } = Layout
const text_style = {
  webkitfontsmoothing: 'antialiased',
  color: '#123693',
  font: "100 20px/30px 'Deepmind Sans',Helvetica,Arial,sans-serif",
  position: 'relative',
  zindex: 2,
  display: 'inline-block',

}
function donate() {
  return (
    <Fragment>
      <Header text="By Supporting us you are supporting yourself !"/>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3>We need money or AWS Credits!</h3>
          </div>

          <Col span={12} offset={6}>
            <p style={text_style}>
              We are barely able to cope up with the bills of AWS and development challenges, This is an Open Source, Non Profit project that relies on the
              support of people like you. If everyone reading this can give $5
              per month, we can survive forever and serve to all research community out there.
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
