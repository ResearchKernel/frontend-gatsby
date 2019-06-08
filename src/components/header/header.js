import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import classNames from 'classnames'
import './header.css'
import Dropdown from '../dropdown/dropdown.component'
import { Link } from 'gatsby'

const Header = () => {
  const [visible, setModal] = useState(false)
  const [type, setType] = useState('')
  const [isNavVisible, setToggleNav] = useState(false)
  const showLoginSignupModal = e => {
    const { type } = e.target.dataset
    setType(type)
    setModal(true)
  }
  return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        <img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
          alt="logo"
        />
      </div>
      <div
        className="Navbar__Link Navbar__Link-toggle"
        onClick={() => setToggleNav(!isNavVisible)}
      >
        <button
          className={classNames('hamburger hamburger--spring', {
            'is-active': isNavVisible,
          })}
          type="button"
        >
          <span
            className="hamburger-box"
            style={{
              fontSize: 15,
            }}
          >
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/community">Community</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
      <li>
        <Link to="/joinus">Join Us</Link>
      </li>
      <li>
        <Link to="/donate">Donate Us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/">Search Bar</Link>
      </li>
      <nav className="Navbar__Items">
        <div className="Navbar__Links" onClick={showLoginSignupModal}>
          <Button data-type="log in" type="default">
            LOG IN
          </Button>
          <Button data-type="sign up" type="primary">
            SIGN UP
          </Button>
        </div>
        <Dropdown />
      </nav>

      <Modal
        title={`${type.toUpperCase()}`}
        visible={visible}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        {type === 'log in' ? <div>Login Modal</div> : <div>Sign up Modal</div>}
      </Modal>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
