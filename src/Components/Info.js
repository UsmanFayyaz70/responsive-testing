import { Col, Row } from 'antd'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const Info = () => {
    return (
        <Row justify='space-evenly'>
            <Col span={24}>
                <Row >
                    <Col span={22}>
                        <p>All mail</p>
                    </Col>
                    <Col span={2}>
                        <AiOutlineInfoCircle />
                    </Col>
                </Row>

                <Row >
                    <Col span={22}>
                        <p>Trash</p>
                    </Col>
                    <Col span={2}>
                        <AiOutlineInfoCircle />
                    </Col>
                </Row>
                <Row >
                    <Col span={22}>
                        <p>Spam</p>
                    </Col>
                    <Col span={2}>
                        <AiOutlineInfoCircle />
                    </Col>
                </Row>
                <Row >
                    <Col span={22}>
                        <p>Follow up</p>
                    </Col>
                    <Col span={2}>
                        <AiOutlineInfoCircle />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Info