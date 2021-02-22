import { Card, Menu, Dropdown, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import React from 'react'
import { CardWrapper } from './style';

const { Meta } = Card;

const LiveCard = ({ liveCard , onDelete , onStatus }) => {
    const menu = () => {
        return (
        <Menu>
            <Menu.Item onClick={()=> onStatus(liveCard.videoId)}>
                {liveCard.status ? "设为私密" : "设为公开"}
            </Menu.Item>
            <Menu.Item onClick={()=> onDelete(liveCard.videoId)}>
                删除
            </Menu.Item>
        </Menu>
        )
    }

    return (
        <CardWrapper>
            <Card size="small"
                style={{ width: 300 }}
                cover={
                    <img
                        alt={liveCard.alt}
                        src={liveCard.img_url||"https://s3.ax1x.com/2021/02/23/ybuuad.jpg"}
                    />
                }
                hoverable={true}
                actions={[
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <EllipsisOutlined key="ellipsis" />
                    </Dropdown>
                ]}
            >
                <Meta
                    title={liveCard.videoName}
                    description={liveCard.updatedAt}
                />
                {liveCard.status ? <Tag color="#82C2C4">公开</Tag> : <Tag color="#E9967A">私密</Tag>}
                
            </Card>
        </CardWrapper>
    )
}

export default LiveCard