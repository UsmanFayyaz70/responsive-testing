import React from 'react'
import { SiMaterialui } from 'react-icons/si'
import { Anchor } from 'antd';
import HamburgerMenu from './HamburgerMenu'
import DropdownMenu from './DropdownMenu'
import { navLinks } from '../constants';

const NavigationBar = () => {

    return (
        <Anchor>
            <nav className='header'>
                <div className='hamburger'>
                    <HamburgerMenu />
                </div>
                <div className='logo-title'>
                    <DropdownMenu />
                    <a href='#' className='logo'><SiMaterialui size={40} /></a>
                    <a href='#' className="nav-title">material ui</a>
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
        </Anchor>
    )
}

export default NavigationBar