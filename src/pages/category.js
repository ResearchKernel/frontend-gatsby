import React from 'react'
import Layout from '../components/layout'
import { Row, Col, Input, Collapse, Icon, Checkbox, Card } from 'antd'
import icon from '../images/icon.png'

const { Search } = Input
const { Panel } = Collapse
const { Meta } = Card

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  marginRight: 24,
  border: 0,
  overflow: 'hidden',
}

const Category = props => {
  console.log(props.location.state.categoryKey)
  return (
    <Layout>
      <div style={{ padding: '70px' }}>
        <div>
          <Row gutter={16}>
            <Col span={12}>Publication database</Col>
            <Col span={12}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: '70px' }}>
          <Row gutter={16}>
            <Col span={8}>Filters</Col>
            <Col span={8}>Sort By:</Col>
            <Col span={8}>1 - 60 of 5301 publications</Col>
          </Row>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                )}
              >
                <Panel header="Year" key="1" style={customPanelStyle}>
                  <Checkbox>2019</Checkbox>
                  <Checkbox>2018</Checkbox>
                  <Checkbox>2017</Checkbox>
                  <Checkbox>2016</Checkbox>
                </Panel>
                <Panel header="Research Areas" key="2" style={customPanelStyle}>
                  <Checkbox> Algorithms and Theory</Checkbox>
                  <Checkbox>Data Management</Checkbox>
                  <Checkbox>Data Mining and Modeling</Checkbox>
                  <Checkbox>
                    Distributed Systems and Parallel Computing
                  </Checkbox>
                  <Checkbox>Economics and Electronic Commerce</Checkbox>
                  <Checkbox>Education Innovation</Checkbox>
                  <Checkbox>General Science</Checkbox>
                  <Checkbox>Hardware and Architecture</Checkbox>
                  <Checkbox>
                    Human-Computer Interaction and Visualization
                  </Checkbox>
                </Panel>
                <Panel header="Teams" key="3" style={customPanelStyle}>
                  <Checkbox>AI Fundamentals & Applications</Checkbox>
                  <Checkbox>Algorithms & Optimization</Checkbox>
                  <Checkbox>Applied Science</Checkbox>
                  <Checkbox>Google Brain Team</Checkbox>
                  <Checkbox>Language</Checkbox>
                </Panel>
                <Panel header="Collections" key="4" style={customPanelStyle}>
                  <Checkbox>ICML</Checkbox>
                  <Checkbox>NeurIPS</Checkbox>
                  <Checkbox>Google AI Residency</Checkbox>
                  <Checkbox>Project Magenta</Checkbox>
                </Panel>
              </Collapse>
            </Col>
            <Col span={18}>
              <Row gutter={16} style={{ margin: 20 }}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{ margin: 20 }}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{ margin: 20 }}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{ margin: 20 }}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 270, height: 350, overflow: 'scroll' }}
                  >
                    <Meta
                      title="They Don't Leave Us Alone Anywhere We Go"
                      description="Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Sane Gaytán, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo  (2019) (to appear)"
                    />
                    <img alt="example" src={icon} />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Category
