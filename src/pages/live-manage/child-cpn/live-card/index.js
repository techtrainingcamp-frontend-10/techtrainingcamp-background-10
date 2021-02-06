import { Card, Avatar } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import React, { memo } from 'react'
import { CardWrapper } from './style';

const { Meta } = Card;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
    </Menu>
);

export default memo(function index() {
    const Live = {
        title: '直播活动sample1',
        description: '2021-02-06 14:54',
        alt: 'example',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    }

    return (
        <CardWrapper>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt={Live.alt}
                        src={Live.src}
                    />
                }
                actions={[
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <EllipsisOutlined key="ellipsis" />
                    </Dropdown>
                ]}
            >
                <Meta
                    title={Live.title}
                    description={Live.description}
                />
            </Card>
        </CardWrapper>
    )
})
