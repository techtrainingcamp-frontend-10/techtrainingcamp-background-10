import { Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { memo } from 'react'

const { Meta } = Card;

export default memo(function index() {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <EllipsisOutlined key="ellipsis" />
            ]}
        >
            <Meta
                title="直播活动"
                description="时间时间"
            />
        </Card>
    )
})
