import { Card, Avatar } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { memo } from 'react'
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
    console.log(onDelete)
    return (
        <CardWrapper>
            <Card
                style={{ width: 300 }}
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
            </Card>
        </CardWrapper>
    )
}

export default LiveCard