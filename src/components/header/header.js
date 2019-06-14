import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'gatsby'
const { Header, Content, Footer } = Layout

function header() {
  return (
    <div>
      <Header style={{ position: 'auto', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{ lineHeight: '64px' }}
        >
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
        </Menu>
      </Header>
    </div>
  )
}

export default header
