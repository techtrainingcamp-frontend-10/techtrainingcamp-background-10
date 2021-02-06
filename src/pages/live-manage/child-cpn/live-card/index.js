import { Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { memo } from 'react'

const { Meta } = Card;

export default memo(function index() {
    const Live = {
        title: '直播活动sample1',
        description: '2021-02-06 14:54',
        alt: 'example',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    }
        
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
        </Card>
    )
})
