import { Card, Avatar } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import React, { memo } from 'react'
import { CardWrapper } from './style';

const { Meta } = Card;

const menu = (
    <Menu>
        <Menu.Item>
            <a>
                Edit
            </a>
        </Menu.Item>
        <Menu.Item>
            <a>
                Delete
            </a>
        </Menu.Item>
    </Menu>
);

const LiveCard = ({ liveCard }) => {

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
                    <Dropdown overlay={menu} placement="topCenter" arrow>
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