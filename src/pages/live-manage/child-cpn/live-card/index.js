import { Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { memo } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';

const { Meta } = Card;


const Live = {
    title: '直播活动sample1',
    description: '2021-02-06 14:54',
    alt: 'example',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
}

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
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
    )

export default memo(function index() {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={Live.alt}
                    src={Live.src}
                />
            }
            actions={[
                <EllipsisOutlined key="ellipsis" />
            ]}
        >
            <Meta
                title={Live.title}
                description={Live.description}
            />
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
            </a>
        </Dropdown>
        </Card>
    )
})
