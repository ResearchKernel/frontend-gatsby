import { Form, Icon, Input, Button, Checkbox } from 'antd'
import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/header'
import axios from 'axios'

const { Content, Footer } = Layout

export class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    var apiBaseUrl = 'http://3.215.107.53:3000/api/v1/auth/'
    var self = e
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values', values)
      }
      var payload = {
        username: values.username,
        password: values.password,
      }
      axios
        .post(apiBaseUrl + '/login', payload)
        .then()
        .catch({})
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                  onChange={(event, newValue) =>
                    this.setState({ username: newValue })
                  }
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={(event, newValue) =>
                    this.setState({ password: newValue })
                  }
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </Content>
        <Footer>This is footer</Footer>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(login)

export default WrappedNormalLoginForm
