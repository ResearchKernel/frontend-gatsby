import { Menu, Row } from 'antd'
import { Link } from 'gatsby'
import React from 'react'
const style_header_tabs = {
  fontSize: 15,
  padding: '0.9rem',
  color: '#fff',
  boxsizing: 'border-box',
  backgroundcolor: 'transparent',
  whitespace: 'nowrap',
  boxshadow: '0 0 1px rgba(0,0,0,.03), 0 10px 32px -5px rgba(0,0,0,.1)',
}

const text_style = {
  webkitfontsmoothing: 'antialiased',
  color: 'white',
  font: "1000 40px/60px 'Deepmind Sans',Helvetica,Arial,sans-serif",
  position: 'relative',
  zindex: 2,
  display: 'inline-block',
}

const header = ({ text, element }) => (
  <div
    style={{
      background: 'linear-gradient(to left, #009fff, #ec2f4b)',
      height: 400,
      marginright: 'auto',
      paddingInline: 1,
    }}
  >
    <div>
      <Row gutter={8}>
        <div
          style={{
            textAlign: 'center',

            display: 'flex',
          }}
        >
          <Menu
            mode="horizontal"
            style={{
              lineHeight: '40px',
              position: 'auto',
              zIndex: 1,
              background: 'transparent',
              width: '100%',
            }}
          >
            <Menu.Item key="Home" style={style_header_tabs}>
              <Link to="/">ResearchKernel</Link>
            </Menu.Item>
            <Menu.Item key="About Us" style={style_header_tabs}>
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="Community" style={style_header_tabs}>
              <Link to="/community">Community</Link>
            </Menu.Item>
            <Menu.Item key="Team" style={style_header_tabs}>
              <Link to="/team">Team</Link>
            </Menu.Item>
            <Menu.Item key="Join Us" style={style_header_tabs}>
              <Link to="/joinus">Join Us</Link>
            </Menu.Item>
            <Menu.Item key="Donate Us" style={style_header_tabs}>
              <Link to="/donate">Donate Us</Link>
            </Menu.Item>
            <Menu.Item key="Blog" style={style_header_tabs}>
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item
              style={{
                float: 'right',
                fontSize: 15,
                padding: '0.9rem',
                color: '#fff',
                boxsizing: 'border-box',
                backgroundcolor: 'transparent',
                whitespace: 'nowrap',
              }}
            >
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item
              style={{
                float: 'right',
                ffontSize: 15,
                padding: '0.9rem',
                color: '#fff',
                boxsizing: 'border-box',
                backgroundcolor: 'transparent',
                whitespace: 'nowrap',
              }}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Row>
      <Row gutter={8}>
        <div style={text_style}>
          <h1 style={text_style}>{text}</h1>
          <element />
        </div>
      </Row>
    </div>
  </div>
)

export default header
