import React, { useState } from 'react'
import { DropdownMenu, Dropdown } from './dropdown.style'
import { FaUser, FaArrowDown } from 'react-icons/fa'

const DropdownComponent = () => {
  const [active, setVisible] = useState(false)
  const toggleDropdown = e => {
    setVisible(!active)
  }
  return (
    <Dropdown className="dropdown" onClick={toggleDropdown}>
      {/* <div>Show menu</div> */}
      <FaUser />
      <span>&nbsp;&nbsp;&nbsp;</span>
      <FaArrowDown />
      <DropdownMenu
        className="dropdown-menu"
        style={active ? { display: 'initial' } : { display: 'none' }}
      >
        <div>
          <div> Menu item 1 </div>
          <div> Menu item 2 </div>
          <div> Menu item 3 </div>
        </div>
      </DropdownMenu>
    </Dropdown>
  )
}
export default DropdownComponent
