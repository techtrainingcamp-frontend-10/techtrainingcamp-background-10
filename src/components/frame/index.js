import { Layout, Menu, Button } from 'antd';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { isLogin, removeToken } from "@/store/auth";
import { FrameWrapper } from './style';

const { Header, Content, Footer } = Layout;

function Frame(props) {
    const handleLog = () => {
        if (isLogin()){
            removeToken();
        }
        props.history.push("/login");
    }

    return (
        <FrameWrapper>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo">后台管理系统</div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={p => { isLogin() ? props.history.push("/live") : props.history.push("/login") }} >直播间管理</Menu.Item>
                        <Menu.Item key="2" onClick={p => { isLogin() ? props.history.push("/video") : props.history.push("/login") }} >短视频管理</Menu.Item>
                        <Menu.Item key="3" onClick={p => { isLogin() ? props.history.push("/comment") : props.history.push("/login") }} >评论管理</Menu.Item>
                    </Menu>
                    <Button className="login" type="text" onClick={handleLog} >{isLogin() ? "退出" : "登录"}</Button>
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
export default withRouter(Frame);