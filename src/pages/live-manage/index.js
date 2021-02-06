import React, { memo } from 'react'
import { Button } from 'antd';
import { useState } from 'react'
import { LiveWrapper } from './style';
import LiveCards from './child-cpn/live-card/LiveCards'

export default memo(function LiveManage() {
    const [showLiveCard, setShowLiveCard]  = useState(false)
    const [liveCards, setLiveCards] = useState([ 
        {
            title: '直播活动sample1',
            description: '2021-02-06 14:54',
            alt: 'example1',
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            id: 1
        }, 
        
        {
            title: '直播活动sample2',
            description: '2021-02-07 14:54',
            alt: 'example2',
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            id: 2
        }, 

        {
            title: '直播活动sample3',
            description: '2021-02-08 14:54',
            alt: 'example3',
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            id: 3
        }, 
    ])

    return (
        <LiveWrapper>
            <div>
                <h2>直播列表</h2>
                <Button className="new-button" type="primary">新建直播</Button>
                {liveCards.length > 0 ? 
                    (
                        <LiveCards liveCards={liveCards} />
                    ) 
                    : (
                        <h3>You've not set up a live room yet--click 新建直播 to set up your first live room!</h3>
                    )
                }
            </div>
        </LiveWrapper>
    )
})
