import React, { useState } from 'react'
import { DropdownMenu, Dropdown } from './dropdown.style'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import classNames from 'classnames'

const DropdownComponent = () => {
  const [active, setVisible] = useState(false)
  const toggleDropdown = e => {
    setVisible(!active)
  }

  return (
    <Dropdown
      className={classNames('dropdown', { 'select-hover': active })}
      onClick={toggleDropdown}
    >
      <FaUser />
      <span>&nbsp;&nbsp;&nbsp;</span>
      <FaArrowDown
        className={classNames({ 'arrow-rotate': active })}
        size="12"
      />
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
