import { Card, Menu, Dropdown, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import React from 'react'
import { CardWrapper } from './style';

const { Meta } = Card;

const menu = (id , onDelete) => {
    return (
    <Menu>
        <Menu.Item>
            编辑
        </Menu.Item>
        <Menu.Item onClick={()=> onDelete(id)}>
            删除
        </Menu.Item>
    </Menu>
    )
}

const LiveCard = ({ liveCard , onDelete }) => {
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
                    <Dropdown overlay={menu(liveCard.id, onDelete)} placement="topCenter" arrow>
                        <EllipsisOutlined key="ellipsis" />
                    </Dropdown>
                ]}
            >
                <Meta
                    title={liveCard.title}
                    description={liveCard.description}
                />
                <Tag color="#82C2C4">直播中</Tag>
            </Card>
        </CardWrapper>
    )
}

export default LiveCard