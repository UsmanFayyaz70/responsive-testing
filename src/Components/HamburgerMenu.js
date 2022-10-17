import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Drawer, Space } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <>
            <Space>
                <Button type="ghost" onClick={showDrawer} icon={<GiHamburgerMenu size={40} />} ghost />
            </Space>
            <Drawer
                title={<a href='#' className="drawer-title">Material UI</a>}
                placement="left"
                closable={true}
                onClose={onClose}
                open={open}
                key={"left"}
            >
                <Sidebar />
            </Drawer>
        </>
    )
}

export default HamburgerMenu