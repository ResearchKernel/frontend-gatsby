import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Input, Divider, Button, Modal } from 'antd'
<<<<<<< HEAD
import { Link } from 'gatsby'
||||||| merged common ancestors
import { FaBars, FaGlobe, FaFire } from 'react-icons/fa'
=======
import classNames from 'classnames'
import { FaGlobe, FaFire } from 'react-icons/fa'
>>>>>>> 6258c2303e25749227d605c2a8a94ea66f3d7447
import './header.css'
import Dropdown from '../dropdown/dropdown.component'

const Header = () => {
  const [visible, setModal] = useState(false)
  const [type, setType] = useState('')
<<<<<<< HEAD
  const [isNavVisible, setToggleNav] = useState(false)

  /*const toggleSideNav = e => {
    // setToggleNav(!isNavVisible)
    setToggleNav(!isNavVisible)
  }
  */
||||||| merged common ancestors
  // const [isNavVisible, setToggleNav] = useState(false)
  const toggleSideNav = e => {
    // setToggleNav(!isNavVisible)
  }
=======
  const [isNavVisible, setToggleNav] = useState(false)
>>>>>>> 6258c2303e25749227d605c2a8a94ea66f3d7447
  const showLoginSignupModal = e => {
    const { type } = e.target.dataset
    setType(type)
    setModal(true)
  }

  return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        <Link to='/'><img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
          alt="logo"
<<<<<<< HEAD
        /></Link>
||||||| merged common ancestors
        />
      </div>
      <div className="Navbar__Link Navbar__Link-toggle" onClick={toggleSideNav}>
        <FaBars />
=======
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
              fontSize: 12,
            }}
          >
            <span className="hamburger-inner" />
          </span>
        </button>
>>>>>>> 6258c2303e25749227d605c2a8a94ea66f3d7447
      </div>
      <Input
        style={{ width: '500px', borderRadius: 2 }}
        type="text"
        placeholder="Search"
      />
<<<<<<< HEAD
      {/*<div className="Navbar__Link Navbar__Link-toggle" onClick={toggleSideNav}>
        <FaBars />
      </div>*/}
       <nav
        className="Navbar__Items-mobile"
        
      >
        <label>
          <input type="checkbox"></input>
          <span className="menu Navbar__Link Navbar__Link-toggle">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/donate'>Donate</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <a href="https://github.com/researchkernel" target="_blank">GitHub</a>
            </li>
          </ul>
        </label>
        {/*<div className="Navbar__Items-mobileitems">
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
        </div>*/}
      </nav>
||||||| merged common ancestors
      {/* <nav
        className="Navbar__Items-mobile"
        style={
          isNavVisible
            ? { display: 'initial', width: 200 }
            : { display: 'none', width: 0 }
        }
      >
        <div className="Navbar__Items-mobileitems">
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
        </div>
      </nav> */}
=======
>>>>>>> 6258c2303e25749227d605c2a8a94ea66f3d7447
      <nav className="Navbar__Items">
        <div className="Navbar__Links flexLeft">
          <Link to='/about'>About</Link>
        </div>
        <div className="Navbar__Links flexLeft">
          <Link to='/team'>Team</Link>
        </div>
        <div className="Navbar__Links flexLeft">
          <Link to='/donate'>Donate</Link>
        </div>
        <div className="Navbar__Links flexLeft">
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="Navbar__Links flexLeft">
          <a href="https://github.com/researchkernel" target="_blank">GitHub</a>
        </div>
        <Divider
          style={{
            height: 34,
            top: 0,
            bottom: 0,
          }}
          type="vertical"
        />
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
