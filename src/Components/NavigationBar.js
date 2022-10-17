import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { SiMaterialui } from 'react-icons/si'

const NavigationBar = () => {
    const navLinks = [
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
            <div className='hamburger'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <div className='subtitle'>
            <a href='#' className='logo'><SiMaterialui size={40} /></a>
            <span></span>
            <a href='#' className="title">Material UI</a>
            </div>
            <ul className='menu'>
                {navLinks.map((navLink) => {
                    return (
                        <li>
                            <a href="#" className='nav-link' key={navLink.key}> {navLink.label} </a>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default NavigationBar