import React, { memo } from 'react'
import { useState , useEffect } from 'react'
import AddLiveRoom from './components/AddLiveRoom'
import LiveCards from './components/LiveCards'
import { LiveWrapper } from './style';
import { Empty } from 'antd';

export default memo(function VideoManage() {
    const [liveCards, setLiveCards] = useState([])
    
    useEffect(() => {
        console.log(liveCards) },
        [liveCards]
    )


    // add live card
    const addLiveCard = (title , des) => { 
        // fake id
        const id = liveCards.length + 1
        const name = title
        const desc = des
        const newLiveCard = {
                title: name,
                description: Date(),
                alt:"userAdd", 
                src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
                status: true,
                id
            }

        setLiveCards(liveCards => ([...liveCards, newLiveCard]))
    }

    // handle delete card
    const deleteLiveCard = (id) => {
        setLiveCards(liveCards.filter((liveCard) => liveCard.id !== id))
    }

    const reverseStatus = (id) => {
        setLiveCards(
            liveCards.map((liveCard) => 
            liveCard.id === id ? { ...liveCard, status:!liveCard.status } : liveCard
            )
        )
    }

    return (
        <LiveWrapper>
            <div>
                <h2>短视频页</h2>
                <AddLiveRoom onAdd={addLiveCard}/>
                {liveCards.length > 0 ? 
                    (
                        <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} onStatus={reverseStatus}/>
                    ) 
                    : (
                        <>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="空空如也～ 点击上传视频来上传你的第一个作品吧!"/>
                        </>
                    )
                }
            </div>
        </LiveWrapper>
    )
    
})
