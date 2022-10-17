import { Card, Col, Row } from 'antd'
import React from 'react'
import Info from './Info'
import Options from './Options'
import User from './User'

const Main = () => {
    const recentChats = [
        {
            label: "Brendan Lim",
            key: "brendan-lim"
        },
        {
            label: "Eric Hoffman",
            key: "eric-hoffman"
        },
        {
            label: "Grace Ng",
            key: "grace-ng"
        },
        {
            label: "Kerem Suer",
            key: "kerem-suer"
        },
        {
            label: "Raquel Parrado",
            key: "raquel-parrado"
        }
    ]

    const previousChats = [
        {
            label: "Brendan Lim",
            key: "brendan-lim"
        },
        {
            label: "Eric Hoffman",
            key: "eric-hoffman"
        }
    ]

    return (
        <>
            <h3>Lists</h3>
            <Card bordered={true} style={{ width: "75%", height: "auto" }}>
                <Row justify="space-between">
                    <Col span={24}>
                        <Row justify="space-between">
                            <Col lg={12} sm={24} xs={24} xl={12} md={24}>
                                <Card style={{ width: "75%", height: "85%" }}>
                                    <Options />
                                </Card>
                            </Col>
                            <Col lg={12} sm={24} xs={24} xl={12} md={24}>
                                <Card
                                    title=
                                    {
                                        <p className="sub-title">Recent chats</p>
                                    }
                                    style={{ width: "90%", height: "100%" }}>
                                    {recentChats.map((user) => {
                                        return (
                                            <User user={user} />
                                        )
                                    })}
                                </Card>
                            </Col>
                        </Row>

                        <Row justify="space-between">
                            <Col lg={12} sm={24} xs={24} xl={12} md={24}>
                                <Card style={{ width: "75%", height: "85%" }}>
                                    <Info />
                                </Card>
                            </Col>
                            <Col lg={12} sm={24} xs={24} xl={12} md={24}>
                                <Card
                                    title=
                                    {
                                        <p className="sub-title">Previous chats</p>
                                    }
                                    style={{ width: "90%", height: "85%" }}>
                                    {previousChats.map((user) => {
                                        return (
                                            <User user={user} />
                                        )
                                    })}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Main