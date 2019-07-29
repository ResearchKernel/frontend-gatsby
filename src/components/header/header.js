import { Button, Form, Input, Layout, Menu, Modal, Radio } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

const { Header, Content, Footer } = Layout

class header extends React.Component {
  render() {
    return (
      <div>
        {/* <Header style={{ position: 'auto', zIndex: 1, width: '100%' }}> */}
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
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
        {/* </Header> */}
      </div>
    )
  }
}
export default header
