import React from "react";
import "./App.css";
import { Card, Col, Layout, Menu, Row } from 'antd';
import { BsGithub } from 'react-icons/bs'
import { SiMaterialui } from 'react-icons/si'
import User from "./Components/User";
import Options from "./Components/Options";
import Info from "./Components/Info";

const { Header, Content, Sider } = Layout;

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

const recentUsers = [
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

const previousUsers = [
  {
    label: "Brendan Lim",
    key: "brendan-lim"
  },
  {
    label: "Eric Hoffman",
    key: "eric-hoffman"
  }
]

const App = () => (
  <Layout>
    <Header className="header">
      <Row justify="start" >
        <Col lg={9} sm={9} md={9} xl={9} xs={7}>
          <Row justify="start" gutter={16}>
            <Col span={3}> <div className="logo">
              <SiMaterialui size={40} />
            </div>
            </Col>
            <Col span={21}>
              <h3 className="title">Material UI </h3>
            </Col>
          </Row>
        </Col>
        <Col span={15}>
          <Row justify="space-evenly" gutter={8}>
            {items1.map((item) => {
              return (
                <Col lg={5} sm={4} md={5} xs={4} xl={4}>
                  <a className="menu-item" href="#" key={item.key}> {item.label} </a>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0px 0px 0px 1px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h3>Lists</h3>
          <Card bordered={true} style={{ width: "75%", height: "auto" }}>
            <Row justify="space-around">
              <Col span={24}>
                <Row justify="space-around">
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
                      {recentUsers.map((user) => {
                        return (
                          <User user={user} />
                        )
                      })}
                    </Card>
                  </Col>
                </Row>

                <Row justify="space-around">
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
                      {previousUsers.map((user) => {
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
        </Content>
      </Layout>
    </Layout >
  </Layout >
);


export default App;
