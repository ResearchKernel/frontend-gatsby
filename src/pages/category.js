import React from 'react'
import Layout from '../components/layout'
import { Row, Col, Input, Collapse, Icon, Checkbox, Card, Radio } from 'antd'
import icon from '../images/icon.png'
import categoryList from '../list.json'

const { Search } = Input
const { Panel } = Collapse
const { Meta } = Card

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  marginRight: 24,
  border: 0,
  overflow: 'scroll',
}

const Category = props => {
  const categoryKey = props.location.state.categoryKey
  const category = Object.entries(categoryList)
  const selectedCategory = category.filter(
    subCategory => subCategory[0] === categoryKey
  )
  const researchAreas = Object.entries(selectedCategory[0][1].sub)
  return (
    <Layout>
      <div style={{ padding: '70px' }}>
        <div>
          <Row gutter={16}>
            <Col span={12}>
              Publication Papers: {selectedCategory[0][1].name}
            </Col>
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
                  <div style={{ overflow: 'scroll' }}>
                    <Radio.Group
                      onChange={e => console.log(e.target.value)}
                      // value={this.state.value}
                    >
                      {researchAreas.map(item => (
                        <div>
                          <Radio value={item[0]}>{item[1].category}</Radio>
                        </div>
                      ))}
                    </Radio.Group>
                  </div>
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
