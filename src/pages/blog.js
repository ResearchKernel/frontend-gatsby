import { Card, Col, Icon, Layout, Row } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'

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
function blog() {
  return (
    <Fragment>
      <Header text="Research and Technical Blogs @ Researchkernel"/>
      <Content style={{ padding: '0 50px', marginTop: 60 }}>
        <h3 style={text_style}> Data Science and Machine Learning </h3>
        <Row gutter={8}>
          <Col span={6}>
            <div onClick={() => alert('Hello from here')}>
              <Card
                hoverable
                style={{ width: 'auto' }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                  />
                }
              >
                <Meta
                  title="Recommendation Systems Part 1"
  
                />
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                />
              }
              
            >
              <Meta
                title="Recommendation Systems Part 2"

              />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                />
              }
              
            >
              <Meta
                title="Recommendation Systems Part 3"
                
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                />
              }
              
            >
              <Meta
                title="Recommendation Systems Part 4"
                
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                />
              }
              
            >
              <Meta
                title="Recommendation Systems Part 5"
                
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffpd.gsfc.nasa.gov%2Fimages%2Fastrophysics.jpg&f=1"
                />
              }
              
            >
              <Meta
                title="Recommendation Systems Part 6"
                
              />
            </Card>
          </Col>
          
        </Row>
        <br />
        <h3 style={text_style}> AWS Cloud Architecture Designs, Hacks and tricks</h3>
        <br />
        <Row gutter={8}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
           <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg"
                />
              }
              
            >
              <Meta
                title="AWS EC2 Part 1"
          
              />
            </Card>
          </Col>
        </Row>
        <br />
        <h3 style={text_style}> Search Engine </h3>
        <Row gutter={8}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/public/field/field_image_main/Mathematics%20and%20Statistics.jpg?itok=b0oi3q05"
                />
              }
              
            >
              <Meta
                title="Astro Physics"
                description="Checkout what is happeing in Astro Physics"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <h3 style={text_style}> Docker and Kubernetes </h3>
        <Row gutter={8}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://t3.ftcdn.net/jpg/01/44/84/62/500_F_144846272_kqxHsTYLwNzRv4KivOQE6QFtVReass5T.jpg"
                />
              }
              
            >
              <Meta title="Econometrics"  />
            </Card>
          </Col>
        </Row>
        <br />
        <h3 style={text_style}>How to start an Open Source Project? </h3>
        <Row gutter={8}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="http://www.sissa.it/app/images/wallpaper.jpg"
                />
              }
              
            >
              <Meta
                title="Europe Street beat"
                
              />
            </Card>
          </Col>
        </Row>
        <br />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Card title="Footer">
          <h1>This is what?</h1>
        </Card>
      </Footer>
    </Fragment>
  )
}

export default blog
