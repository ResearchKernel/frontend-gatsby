import { Button, Form, Input, Layout, Menu, Modal, Radio } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

const { Header, Content, Footer } = Layout

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props
      const { getFieldDecorator } = form
      return (
        <Modal
          visible={visible}
          title="Get inside Research Kernel"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title of collection!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  }
)

class header extends React.Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleCreate = () => {
    const form = this.formRef.props.form
    form.validateFields((err, values) => {
      if (err) {
        return
      }

      console.log('Received values of form: ', values)
      form.resetFields()
      this.setState({ visible: false })
    })
  }

  saveFormRef = formRef => {
    this.formRef = formRef
  }
  render() {
    return (
      <div>
        <Header style={{ position: 'auto', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="Home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="About Us">
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="Community">
              <Link to="/community">Community</Link>
            </Menu.Item>
            <Menu.Item key="Team">
              <Link to="/team">Team</Link>
            </Menu.Item>
            <Menu.Item key="Join Us">
              <Link to="/joinus">Join US</Link>
            </Menu.Item>
            <Menu.Item key="Donate Us">
              <Link to="/donate">Donate US</Link>
            </Menu.Item>
            <Menu.Item key="Blog">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }}>
              <Button type="primary" onClick={this.showModal}>
                Sign Up
              </Button>
              <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
              />
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }}>
              <Button type="primary" onClick={this.showModal}>
                Log In
              </Button>
              <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
              />
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    )
  }
}
export default header
