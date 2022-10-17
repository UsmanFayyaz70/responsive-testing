import { Menu } from 'antd'
import React from 'react'
import { sideItems } from '../constants'

const Sidebar = () => {
      
  return (
    <Menu
    mode="inline"
    style={styles.sideBar}
    items={sideItems}
    className = "sidebar"
  />
  )
}

const styles = {
  sideBar: {
    height: '100%',
    borderRight: 0,
  }
}

export default Sidebar