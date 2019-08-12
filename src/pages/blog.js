import { Card, Col, Icon, Layout, Row } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'

const { Meta } = Card
const { Content, Footer } = Layout

function blog() {
  return (
    <Fragment>
      <Header />

      <h1 style={{ textAlign: 'center', display: 'flex', fontSize: '15' }}>
        Research and Technical Blogs @ Researchkernel
      </h1>

      <Content style={{ padding: '0 50px', marginTop: 60 }}>
        <h3> Data Science and Machine Learning </h3>
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
                actions={[
                  <Icon type="setting" />,
                  <Icon type="edit" />,
                  <Icon type="ellipsis" />,
                ]}
              >
                <Meta
                  title="Recommendation Systems Part 1"
                  description="We have to get data from community.researchkernel.org"
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
                  src="https://science.rpi.edu/sites/default/files/condensed_matter_physics.jpg"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Condensed Matter"
                description="We have to get data from community.researchkernel.org"
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
                  src="https://www.quantamagazine.org/wp-content/uploads/2016/03/BHGR_Ft.jpg"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="General Relativity and 
                
                Quantum Cosmology"
                description="www.instagram.com"
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
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cmu.edu%2Fphysics%2Fresearch%2Fimages%2Fparticle%2FBriere-min.jpg&f=1"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="High Energy Physics"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <h3> AWS Cloud Platfrom </h3>
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
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Computer Science"
                description="Checkout what is happeing in Astro Physics"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <h3> Search Engine </h3>
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
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Astro Physics"
                description="Checkout what is happeing in Astro Physics"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <h3> Docker and Kubernetes </h3>
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
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta title="Econometrics" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
        <br />
        <h3>How to start an Open Source Project? </h3>
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
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
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
