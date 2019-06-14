import { Card, Col, Icon, Layout, Row, Divider } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'

const { Meta } = Card
const { Content, Footer } = Layout
const gridStyle = {
  width: '30%',
  hoverable: true,
}

function blog() {
  return (
    <Fragment>
      <Header />
      <Content style={{ padding: '0 50px', marginTop: 60 }}>
        <h1>Research Kenel Blogs</h1>
        <br />
        <h3>Tech Blogs</h3>
        <Row gutter={8}>
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
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Search Enginer in Elastic Search on top of AWS SPOT Instances"
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
        <Row gutter={8}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="http://www.massey.ac.nz/massey/fms/Colleges/College%20of%20Sciences/INMS/Research/Physics/nonlinearwaves.jpg"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                title="Nonlinear Sciences"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 'auto' }}
              cover={<img alt="example" src="" />}
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta title="Physics" description="www.instagram.com" />
            </Card>
          </Col>
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
              <Meta title="Quantum Physics" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
        <br />

        <h1>Computer Science</h1>
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

        <h1>Maths</h1>
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

        <h1> Econometrics </h1>
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

        <h1>Electrical Engineering and Systems Science</h1>
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
        <h1>Nuclear</h1>
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
