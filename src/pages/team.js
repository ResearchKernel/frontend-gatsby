import React from 'react'
import Header from '../components/header/header'
import { Card, Col, Row, Icon, Avatar } from 'antd'

const { Meta } = Card

function team() {
  return (
    <div>
      <Header />
      <div
        style={{
          background: '#ECECEC',
          'padding-bottom': 5,
          'padding-top': 100,
          'padding-left': 150,
        }}
      >
        <h1>Project Collaborators</h1>
      </div>

      <div
        style={{
          background: 'black',
          'padding-bottom': 50,
          'padding-top': 100,
          'padding-left': 150,
        }}
      >
        <Row gutter={16}>
          <Col span={7}>
            <Card
              title=""
              bordered={false}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://media.licdn.com/dms/image/C4E03AQGRMkcNREZYfw/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=xX6HNnXoQnvvdP6eKwCcxOQMcCK4woljlcrnGHKxK7s"
                />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Prakritidev Verma "
                description="Data Scientist | AWS Cloud Architect | SAP Successfactor's Consultant
                "
              />
            </Card>
          </Col>
          <Col span={7}>
            <Card
              title=""
              bordered={false}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://media.licdn.com/dms/image/C5103AQHzGKS49lcoqA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=BAqezEJAEAWJdH95LIFhFJu4h-XX1SgXRwHXTRSpeak"
                />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Tushar Mudgal "
                description="Building scalable systems for high frequency data."
              />
            </Card>
          </Col>
          <Col span={7}>
            <Card
              title=""
              bordered={false}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://media.licdn.com/dms/image/C5603AQH2tH2jwN0RXg/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=IsJC9Rym6K0DGK1HHXFst5Gshry0HkSx6OH6L2FfveE"
                />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta title="Amit Kushwaha" description="UI Engineer" />
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={20}>
          <Col span={7}>
            <Card
              title=""
              bordered={false}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://media.licdn.com/dms/image/C5603AQEvoBs0R1zfPQ/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=lbg_JQO_-RvM_fBwbmKVweIrV3TRMm_aIgQ-g_dA_Ak"
                />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Waqas Hamid"
                description="Software Development Engineer"
              />
            </Card>
          </Col>
          <Col span={7}>
            <Card
              title=""
              bordered={false}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://avatars2.githubusercontent.com/u/15038734?s=400&v=4"
                />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Mohit "
                description="Pursuing M.C.A from G.G.S.I.P.U. currently invested in back-end development with tools like Nodejs, Expressjs and MongoDb"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default team
