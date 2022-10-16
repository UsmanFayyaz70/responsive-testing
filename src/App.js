import React from "react";
import "./App.css";
import { Layout } from 'antd';
import NavigationBar from "./Components/NavigationBar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const { Header, Content, Sider } = Layout;

const App = () => (
  <Layout>
      <NavigationBar />
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Sidebar />
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
          <Main />
        </Content>
      </Layout>
    </Layout >
  </Layout >
);


export default App;
