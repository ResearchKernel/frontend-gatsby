import { Card, Col, Layout, Row, Table } from 'antd'
import React, { Fragment } from 'react'
import Header from '../components/header/header'


const { Content, Footer } = Layout
const columns = [
  {
    title: 'Domain Category',
    dataIndex: 'name',
  },
  {
    title: 'Codes',
    dataIndex: 'age',
  },
  {
    title: 'Domain Sub-Category',
    dataIndex: 'address',
  },
]
const data = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]

function about() {
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
        <h1 style={{ textAlign: 'center', display: 'flex', fontSize: '15' }}>
          Our Vision is to provide everything at one place, potentially save
          time of Researchers.
        </h1>
      </div>
      {/* ResearchKernel's Contextual Search and Open Community Forum */}
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3>ResearchKernel's Contextual Search and Open Community Forum</h3>
          </div>

          <Col span={12} offset={6}>
            <p>
              Our objective at ResearchKernel is to not only provide a platform
              for you to do a search but also make it interactive and relevant.
              With Contextual Search, we make the tedious task of searching
              easier only show what's relevant to you that save your time from
              going through unnecessary Search Results. We also provide
              Community Forum to find like-minded people that might become your
              collaborators for your project.
            </p>
          </Col>
          <br />
        </Row>
      </Content>
      {/* Lis of cards */}
      <Content>
        <Row gutter={8}>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FoG9JWEcm7dlTi%2Fgiphy.gif&f=1"
                />
              }
            />
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F68%2F6b%2F26%2F686b2629c7037e38cbc5aa8f74d31401.gif&f=1"
                />
              }
            />
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F7d%2Fa2%2F217da299cc918fad9b76eb99e4bb75b3.gif&f=1"
                />
              }
            />
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FoG9JWEcm7dlTi%2Fgiphy.gif&f=1"
                />
              }
            />
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F7d%2Fa2%2F217da299cc918fad9b76eb99e4bb75b3.gif&f=1"
                />
              }
            />
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F68%2F6b%2F26%2F686b2629c7037e38cbc5aa8f74d31401.gif&f=1"
                />
              }
            />
          </Col>
        </Row>
      </Content>
      {/* Personalized  */}
      <Content>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3> Personalised Recomendations, Daily Updates from Arxiv.org</h3>
          </div>
          <Col span={12} offset={6}>
            <p>
              Staying Updated is very important, however not everything which is
              published will be usefull. Our Platfrom will also give you
              relevant updates that helps you in your research domain. We use
              Machine Learning and Deep Learning for finding what information
              will be relevant for you based on you interaction with
              ResearchKernel.
            </p>
            <br />
          </Col>
        </Row>
      </Content>
      {/* Lis of cards */}
      <Content>
        <Content>
          <Row gutter={8}>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FoG9JWEcm7dlTi%2Fgiphy.gif&f=1"
                  />
                }
              />
            </Col>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F68%2F6b%2F26%2F686b2629c7037e38cbc5aa8f74d31401.gif&f=1"
                  />
                }
              />
            </Col>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F7d%2Fa2%2F217da299cc918fad9b76eb99e4bb75b3.gif&f=1"
                  />
                }
              />
            </Col>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FoG9JWEcm7dlTi%2Fgiphy.gif&f=1"
                  />
                }
              />
            </Col>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F7d%2Fa2%2F217da299cc918fad9b76eb99e4bb75b3.gif&f=1"
                  />
                }
              />
            </Col>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F68%2F6b%2F26%2F686b2629c7037e38cbc5aa8f74d31401.gif&f=1"
                  />
                }
              />
            </Col>
          </Row>
        </Content>
      </Content>
      {/* Current Domains we are working on. */}
      <Content>
        <Row gutter={16}>
          <div
            style={{ background: '#ECECEC', fontSize: 20, textAlign: 'center' }}
          >
            <h3> Domains we have at ResearchKernel </h3>
          </div>
          <Col span={12} offset={6}>
            <p>
              As an open source project, we are focusing on only publicily
              available search papers. We have started from Arxiv.org that is
              one of the largest free research paper proverder out there. We are
              harvesting all the research paper arxiv has in there database from
              1999 till date, however we are not limited to arxiv databse, we
              will also incoporate other domains databses too in future.
            </p>
            <br />
            <p>
              <Table columns={columns} dataSource={data} size="middle" />
            </p>
          </Col>
        </Row>
      </Content>
      <Footer>
        <h1>This is footer</h1>
      </Footer>
    </Fragment>
  )
}

export default about
