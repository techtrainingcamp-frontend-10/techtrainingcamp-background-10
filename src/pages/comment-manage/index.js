import { Empty } from 'antd';
import React, { memo } from 'react'
import { useState, useEffect } from 'react'

import { getLiveList } from "@/services/manage";
import { LiveWrapper } from './style';
import LiveCards from './components/LiveCards'

export default memo(function CommentManage() {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        getLiveList().then(res => {
            setLiveCards(res.liveList)
            console.log(liveCards);
        })
    },
        []
    )

    // add live card
    const addLiveCard = (title, des) => {
        // fake id
        const id = liveCards.length + 1
        const name = title
        const desc = des
        const newLiveCard = {
            title: name,
            description: desc,
            alt: "userAdd",
            src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
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
                liveCard.id === id ? { ...liveCard, status: !liveCard.status } : liveCard
            )
        )
    }

    return (
        <LiveWrapper>
            <div>
                {liveCards.length > 0 ?
                    (
                        <>
                            <h2>直播列表</h2>
                            <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} onStatus={reverseStatus} />
                        </>
                    )
                    : (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="还没有直播哦～ " />
                    )
                }
            </div>
        </LiveWrapper>
    )
})
