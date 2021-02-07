import React, { memo } from 'react'
import { useState , useEffect } from 'react'
import { LiveWrapper } from './style';
import AddLiveRoom from './child-cpn/live-card/AddLiveRoom'
import LiveCards from './child-cpn/live-card/LiveCards'


export default memo(function LiveManage() {
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
        }
    ])


    // add live card
    const addLiveCard = ({title , des}) => { 
        // fake id
        const id = Math.floor(Math.random() * 10000) + 1
        const newLiveCard = {
                title:title,
                description: des,
                alt:'userAdd', 
                src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                id
            }
        console.log(newLiveCard)
        setLiveCards(liveCards => [...liveCards, newLiveCard])

        // Why it's not updated...
        console.log(liveCards)
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
