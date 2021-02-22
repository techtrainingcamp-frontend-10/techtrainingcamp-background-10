import { Empty } from 'antd';
import React, { memo } from 'react'
import { useState, useEffect } from 'react'

import { getLives } from "@/services/manage";
import { LiveWrapper } from './style';
import LiveCards from './components/LiveCards'

export default memo(function CommentManage() {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        getLives().then(res => {
            setLiveCards(res.success.list);
            console.log(res.success);
        })
    },
        []
    )

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
