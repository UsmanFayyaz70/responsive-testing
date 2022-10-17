import { Dropdown, Menu, Space, Typography } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { navLinks } from '../constants';

const DropdownMenu = () => {
    const menu = (
        <Menu
            selectable
            items={navLinks.filter((item) => {
                return (
                    item.key !== "git-icon"
                    && item
                )
            })}
        />
    );
    return (
        <Dropdown overlay={menu}>
            <Typography.Link>
                <Space>
                    Menu
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    )
}

export default DropdownMenu