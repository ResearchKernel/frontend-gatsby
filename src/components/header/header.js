import { Link } from 'gatsby'
import React from 'react'
import Search from '../searchbar/search.component'
import { HeaderItem, HeaderMenu } from './header.styles'

const Header = ({ text, isSearch = false }) => (
  <HeaderMenu mode="horizontal">
    <HeaderItem key="Home">
      <Link to="/">ResearchKernel</Link>
    </HeaderItem>
    {isSearch && (
      <HeaderItem key="Search">
        <Search />
      </HeaderItem>
    )}
    <HeaderItem key="About Us">
      <Link to="/about">About Us</Link>
    </HeaderItem>
    <HeaderItem key="Community">
      <Link to="/community">Community</Link>
    </HeaderItem>
    <HeaderItem key="Team">
      <Link to="/team">Team</Link>
    </HeaderItem>
    <HeaderItem key="Join Us">
      <Link to="/joinus">Join Us</Link>
    </HeaderItem>
    <HeaderItem key="Donate Us">
      <Link to="/donate">Donate Us</Link>
    </HeaderItem>
    <HeaderItem key="Blog">
      <Link to="/blog">Blog</Link>
    </HeaderItem>
    <HeaderItem key="Signup">
      <Link to="/signup">Sign Up</Link>
    </HeaderItem>
    <HeaderItem key="Login">
      <Link to="/login">Login</Link>
    </HeaderItem>
  </HeaderMenu>
)

export default Header
