import { Card, Col, Layout, Row } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'
// import DivWrapper from '../components/header_div/header_div.component'

const { Meta } = Card
const { Content, Footer } = Layout

function community() {
  return <Fragment>
      <Header />
      <div
        style={{
          background: '#6a8da6',
          textAlign: 'center',
          height: 250,
          display: 'flex',
        }}
      >
        <h1 style={{ textAlign: 'center', display: 'flex', fontSize: '15' }}>
          Platfrom for Collaborating, Conneting and Dicussion. 
        </h1>
      </div>
      <Content style={{ padding: '0 50px', marginTop: 60 }}>
        {/* Physics Categories */}
        <Row gutter={16}>
          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Astrophysics"/>
            </Card>
            </div>
          </Col>
          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Condensed Matter" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="General Relativity and Quantum Cosmology" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="High Energy Physics" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Nonlinear Sciences" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Physics" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Computer Science" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Mathematics" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Quantitative Biology" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Quantitative Finance" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Statistics" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Electrical Engineering and Systems Science" />
            </Card>
            </div>
          </Col>

          <Col span={8}>
          <div onClick={() => alert("We Will Redirect you to the respective community once we go online")}>
            <Card hoverable style={{ width: '240' }} cover={<img alt="example" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1" />}>
              <Meta title="Economics" />
            </Card>
            </div>
          </Col>

        </Row>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Card title="Footer">
          <h1>This is what?</h1>
        </Card>
      </Footer>
    </Fragment>
}

export default community
