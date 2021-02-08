import React, { memo } from 'react'
import { useState , useEffect } from 'react'
import AddLiveRoom from './components/AddLiveRoom'
import LiveCards from './components/LiveCards'
import { LiveWrapper } from './style';

export default memo(function VideoManage() {
    const [liveCards, setLiveCards] = useState([])

    // add live card
    const addLiveCard = ( title , des ) => { 
        // fake id
        console.log('title', title)
        console.log(des)
        const id = Math.floor(Math.random() * 10000) + 1
        const name = title
        const desc = des
        const newLiveCard = {
                title: name,
                description: desc,
                alt:'userAdd', 
                src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                id
            }
        setLiveCards([...liveCards, newLiveCard])

        // state滞后一次
        console.log('current state of liveCards', liveCards)
    }

    // handle delete card
    const deleteLiveCard = (id) => {
        setLiveCards(liveCards.filter((liveCard) => liveCard.id !== id))
    }

    return (
        <LiveWrapper>
            <div>
                <h2>短视频页</h2>
                <AddLiveRoom onAdd={addLiveCard}/>
                    {liveCards.length > 0 ? 
                        (
                            <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} />
                        ) 
                        : (
                            <h3>还没有上传任何短视频。点击 上传短视频 来上传您的第一个作品吧!</h3>
                        )
                    }
            </div>
        </LiveWrapper>
    )
    
})
