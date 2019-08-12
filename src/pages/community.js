import { Card, Col, Layout, Row } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'
// import DivWrapper from '../components/header_div/header_div.component'

const { Meta } = Card
const { Content, Footer } = Layout
const text_style = {
  webkitfontsmoothing: 'antialiased',
  color: '#123693',
  font: "100 20px/30px 'Deepmind Sans',Helvetica,Arial,sans-serif",
  position: 'relative',
  zindex: 2,
  display: 'inline-block',
}
function community() {
  return (
    <Fragment>
      <Header text="Research Communities at ResearchKernel" />
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3> Why Communities ?</h3>
          </div>
          <Col span={12} offset={6}>
            <p style={text_style}>
              As an open source project, we are focusing on only publicily
              available search papers. We have started from Arxiv.org that is
              one of the largest free research paper proverder out there. We are
              harvesting all the research paper arxiv has in there database from
              1999 till date, however we are not limited to arxiv databse, we
              will also incoporate other domains databses too in future.
            </p>
          </Col>
        </Row>
      </Content>
      <Content style={{ padding: '0 50px', marginTop: 40 }}>
        {/* Physics Categories */}
        <Row gutter={16}>
          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Astrophysics" />
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Condensed Matter" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="General Relativity and Quantum Cosmology" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="High Energy Physics" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Nonlinear Sciences" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Physics" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Computer Science" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Mathematics" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Quantitative Biology" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Quantitative Finance" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Statistics" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta title="Electrical Engineering and Systems Science" />
              </Card>
            </div>
          </Col>

          <Col span={8}>
            <div
              onClick={() =>
                alert(
                  'We Will Redirect you to the respective community once we go online'
                )
              }
            >
              <Card
                hoverable
                style={{ width: '240' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
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
  )
}

export default community
