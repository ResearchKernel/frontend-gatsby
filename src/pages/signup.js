import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Icon, Input, Form, Tooltip } from 'antd'
import GoogleLogin from '../components/authentucation/GoogleLogin.component'
import LinkedinLogin from '../components/authentucation/LinkedinLogin.component'
import Header from '../components/header/header'
const FormItem = Form.Item
class Signup extends Component {
  state = { username: '', email: '', password: '' }
  setValue = (type, value) => {
    this.setState({ [type]: value }, () => {})
  }
  handleUsername = e => {
    e.preventDefault()
    this.setValue('username', e.target.value)
  }

  handlePassword = e => {
    e.preventDefault()
    this.setValue('password', e.target.value)
  }
  handleEmail = e => {
    e.preventDefault()
    this.setValue('email', e.target.value)
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
  }
  handleGoogle = () => {
    console.log('Google btn clicked')
  }
  handleGithub = () => {
    console.log('Github btn clicked')
  }
  handleLinkedin = () => {
    console.log('LinkedIn btn clicked')
  }
  render() {
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Row type="flex" justify="center">
              <Col
                type="primary"
                xs={20}
                lg={7}
                style={{ fontSize: '37px', color: '#4E98C9' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <label style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                    Sign Up{' '}
                  </label>
                </div>
              </Col>
            </Row>
          </FormItem>

          <Row type="flex" justify="center">
            <Col xs={20} sm={16} md={12} lg={7}>
              <FormItem>
                <Tooltip
                  placement="right"
                  title="Max 20 Chars, No special symbols"
                >
                  <Input
                    prefix={<Icon type="user" style={{ fontSize: '16px' }} />}
                    size="large"
                    id="error"
                    type="text"
                    placeholder="Enter Username"
                    onBlur={this.handleUsername}
                    required
                    pattern="[A-Za-z]{0,20}"
                  />
                </Tooltip>
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Row type="flex" justify="center">
              <Col xs={20} sm={16} md={12} lg={7}>
                <Input
                  prefix={
                    <Icon block type="mail" style={{ fontSize: '16px' }} />
                  }
                  size="large"
                  type="email"
                  placeholder="Enter Email"
                  required
                  onBlur={this.handleEmail}
                />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row type="flex" justify="center">
              <Col xs={20} sm={16} md={12} lg={7}>
                <Input
                  prefix={<Icon style={{ fontSize: '16px' }} type="unlock" />}
                  size="large"
                  type="password"
                  placeholder="Enter Password"
                  required
                  onBlur={this.handlePassword}
                />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row type="flex" justify="center">
              <Col xs={20} sm={16} md={12} lg={7}>
                <Button
                  type="primary"
                  style={{ fontWeight: 'bold' }}
                  size="large"
                  htmlType="submit"
                  block
                >
                  {' '}
                  Sign Up{' '}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row type="flex" justify="center">
              <Col xs={6.5} sm={4} md={3} lg={2}>
                <GoogleLogin />
              </Col>
              <Col xs={6.5} sm={4} md={3} lg={2}>
                <Button block onClick={this.handleGithub}>
                  <Icon style={{ fontSize: '25px' }} type="github" />
                </Button>
              </Col>
              <Col xs={6.5} sm={4} md={3} lg={2}>
                <LinkedinLogin />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row type="flex" justify="center">
              <Col xs={24}>
                <div style={{ textAlign: 'center' }}>
                  <a href="/login">Already a user? Login Here!</a>
                </div>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Signup
