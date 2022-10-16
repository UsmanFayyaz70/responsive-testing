import { Menu } from 'antd'
import React from 'react'

const Sidebar = () => {
    const items2 = [
        {
          label: "Appbar",
          key: "appbar"
        },
        {
          label: "Avatars",
          key: "avatars"
        },
        {
          label: "Buttons",
          key: "buttons"
        },
        {
          label: "Cards",
          key: "cards"
        },
        {
          label: "Date picker",
          key: "date-picker"
        },
        {
          label: "Dialog",
          key: "dialog"
        },
        {
          label: "Dropdown Menu",
          key: "dropdown-menu"
        },
        {
          label: "Icons",
          key: "icons"
        },
        {
          label: "Icon Buttons",
          key: "icon-buttons"
        },
        {
          label: "Icon Menus",
          key: "icon-menus"
        },
        {
          label: "Left Nav",
          key: "left-nav"
        },
        {
          label: "Lists",
          key: "lists"
        }
      ]
      
  return (
    <Menu
    mode="inline"
    style={{
      height: '100%',
      borderRight: 0,
    }}
    items={items2}
  />
  )
}

export default Sidebar