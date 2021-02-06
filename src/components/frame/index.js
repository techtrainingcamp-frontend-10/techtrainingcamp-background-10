import { Layout, Menu, Breadcrumb } from 'antd';

import React, { memo } from 'react'
import { withRouter } from 'react-router-dom';

import { FrameWrapper } from './style';

const { Header, Content, Footer } = Layout;

function index(props) {
    return (
        <FrameWrapper>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo">后台管理系统</div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={p => { props.history.push("/live") }} >直播间管理</Menu.Item>
                        <Menu.Item key="2" onClick={p => { props.history.push("/video") }} >短视频管理</Menu.Item>
                        <Menu.Item key="3" onClick={p => { props.history.push("/comment") }} >评论管理</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '20px 48px', marginTop: 64 }}>
                    <div className="site-layout-background" >
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>©2021 Created by TechTrainingCamp Frontend 10</Footer>
            </Layout>
        </FrameWrapper>
    )
}
export default withRouter(index);