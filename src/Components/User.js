import React from 'react'
import Meta from "antd/lib/card/Meta";
import { Avatar, Col, Row } from 'antd';
import { MdMessage } from 'react-icons/md';

const User = (props) => {
  return (
    <Row justify='space-evenly' style={{marginBottom:"12px"}} gutter={[16,16]}>
      <Col span={22}>
        <Meta
          avatar={< Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={props.user.label}
          key={props.user.key}
        />
      </Col>
      <Col span={2}>
        <MdMessage />
      </Col>
    </Row>
  )
}

export default User