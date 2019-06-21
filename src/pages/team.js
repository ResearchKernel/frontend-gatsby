import React from 'react'
import Header from '../components/header/header'
import { Card, Col, Row, Icon, Avatar } from 'antd'
import CardWrapper from '../components/card/card.component'

const { Meta } = Card

function team() {
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
        <h1>Project Collaborators</h1>
      </div>

      <div
        style={{
          background: 'black',
          paddingBottom: 50,
          paddingTop: 100,
          paddingLeft: 150,
        }}
      >
        <Row gutter={16}>
          <CardWrapper
            altImage="example"
            source="https://media.licdn.com/dms/image/C4E03AQGRMkcNREZYfw/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=xX6HNnXoQnvvdP6eKwCcxOQMcCK4woljlcrnGHKxK7s"
            title="Prakritidev Verma "
            description="Data Scientist | AWS Cloud Architect | SAP Successfactor's Consultant"
          />

          <CardWrapper
            altImage="example"
            source="https://media.licdn.com/dms/image/C5103AQHzGKS49lcoqA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=BAqezEJAEAWJdH95LIFhFJu4h-XX1SgXRwHXTRSpeak"
            title="Tushar Mudgal "
            description="Building scalable systems for high frequency data."
          />

          <CardWrapper
            altImage="example"
            source="https://media.licdn.com/dms/image/C5603AQH2tH2jwN0RXg/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=IsJC9Rym6K0DGK1HHXFst5Gshry0HkSx6OH6L2FfveE"
            title="Amit Kushwaha"
            description="UI Engineer"
          />
        </Row>
        <br />
        <Row gutter={16}>
          <CardWrapper
            altImage="example"
            source="https://media.licdn.com/dms/image/C5603AQEvoBs0R1zfPQ/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=lbg_JQO_-RvM_fBwbmKVweIrV3TRMm_aIgQ-g_dA_Ak"
            title="Waqas Hamid"
            description="Software Development Engineer"
          />

          <CardWrapper
            altImage="example"
            source="https://avatars2.githubusercontent.com/u/15038734?s=400&v=4"
            title="Mohit "
            description="Pursuing M.C.A from G.G.S.I.P.U. currently invested in back-end development with tools like Nodejs, Expressjs and MongoDb"
          />
        </Row>
      </div>
    </div>
  )
}

export default team
