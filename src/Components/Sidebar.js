import { Menu } from 'antd'
import React from 'react'
import { sideItems } from '../constants'

const Sidebar = () => {
      
  return (
    <Menu
    mode="inline"
    style={{
      height: '100%',
      borderRight: 0,
    }}
    items={sideItems}
    className = "sidebar"
  />
  )
}

export default Sidebar