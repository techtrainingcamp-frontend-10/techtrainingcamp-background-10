import React, { memo } from 'react'
import { useState , useEffect } from 'react'
import { LiveWrapper } from './style';
import AddLiveRoom from './child-cpn/live-card/AddLiveRoom'
import LiveCards from './child-cpn/live-card/LiveCards'
import { Alert } from 'antd';


export default memo(function LiveManage() {
    const [liveCards, setLiveCards] = useState([])


    // add live card
    const addLiveCard = (title , des) => { 
        // fake id
        const id = liveCards.length + 1
        const name = title
        const desc = des
        const newLiveCard = {
                title: name,
                description: desc,
                alt:'userAdd', 
                src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                id
            }

        setLiveCards(liveCards => ([...liveCards, newLiveCard]))

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
                <h2>直播列表</h2>
                <AddLiveRoom onAdd={addLiveCard}/>
                {liveCards.length > 0 ? 
                    (
                        <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} />
                    ) 
                    : (
                        <h3>目前没有配置好的直播间，点击 新建直播 来配置您的第一个直播间吧!</h3>
                    )
                }
            </div>
        </LiveWrapper>
    )
})
