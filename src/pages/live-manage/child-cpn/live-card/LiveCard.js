import { Card, Menu, Dropdown, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import React from 'react'
import { CardWrapper } from './style';

const { Meta } = Card;

const LiveCard = ({ liveCard , onDelete , onStatus }) => {
    const menu = () => {
        return (
        <Menu>
            <Menu.Item onClick={()=> onStatus(liveCard.id)}>
                {liveCard.status ? "下播" : "上线"}
            </Menu.Item>
            <Menu.Item onClick={()=> onDelete(liveCard.id)}>
                删除
            </Menu.Item>
        </Menu>
        )
    }

    return (
        <CardWrapper>
            <Card size="small"
                // style={{ width: 300 }}
                cover={
                    <img
                        alt={liveCard.alt}
                        src={liveCard.src}
                    />
                }
                actions={[
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <EllipsisOutlined key="ellipsis" />
                    </Dropdown>
                ]}
            >
                <Meta
                    title={liveCard.title}
                    description={liveCard.description}
                />
                {liveCard.status ? <Tag color="#82C2C4">直播中</Tag> : <Tag color="#E9967A">已暂停</Tag>}
                
            </Card>
        </CardWrapper>
    )
}

export default LiveCard