import { Col, Row } from 'antd'
import React from 'react'
import { GoInbox } from 'react-icons/go'
import { AiOutlineSend } from 'react-icons/ai'
import { BsStar, BsEnvelopeOpen } from 'react-icons/bs'
const Options = () => {
    return (
        <Row gutter={16} >
            <Col span={24}>
                <Row gutter={16} justify='space-around'>
                    <Col lg={4} sm={4} xs={6} xl={2} md={2}>
                        <GoInbox />
                    </Col>
                    <Col lg={20} sm={20} xs={18} xl={22} md={22}>
                        <p>Inbox</p>
                    </Col>
                </Row>

                <Row gutter={16} justify='space-around'>
                    <Col lg={4} sm={4} xs={6} xl={2} md={2}>
                        < BsStar />
                    </Col>
                    <Col lg={20} sm={20} xs={18} xl={22} md={22}>
                        <p>Starred</p>
                    </Col>
                </Row>

                <Row gutter={16} justify='space-around'>
                    <Col lg={4} sm={4} xs={6} xl={2} md={2}>
                        < AiOutlineSend />
                    </Col>
                    <Col lg={20} sm={20} xs={16} xl={22} md={22}>
                        <p>Sent Mail</p>
                    </Col>
                </Row>

                <Row gutter={16} justify='space-around'>
                    <Col lg={4} sm={4} xs={8} xl={2} md={2}>
                        < BsEnvelopeOpen />
                    </Col>
                    <Col lg={20} sm={20} xs={16} xl={22} md={22}>
                        <p> Drafts</p>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}

export default Options