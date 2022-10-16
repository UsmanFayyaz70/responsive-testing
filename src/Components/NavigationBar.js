import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { SiMaterialui } from 'react-icons/si'

const NavigationBar = () => {
    const items1 = [
        {
            label: "Getting Started",
            key: "getting-started"
        },
        {
            label: "Customization",
            key: "customization"
        },
        {
            label: "Components",
            key: "components"
        },
        {
            label: (<BsGithub />),
            key: "git-icon"
        }
    ]
    return (
        <nav className='header'>
            <a href='#' className='logo'><SiMaterialui size={40} /></a>
            <a href='#' className="title">Material UI</a>
            <ul className='menu'>
                {items1.map((item) => {
                    return (
                        <li>
                            <a href="#" className='nav-link' key={item.key}> {item.label} </a>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default NavigationBar