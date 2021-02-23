import { Empty } from 'antd';
import React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';

import { getVideos } from "@/services/manage";
import { LiveWrapper } from './style';
import LiveCards from './components/LiveCards'

function CommentManage(props) {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        getVideos().then(res => {
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

    const toDetail = (id) => {
        console.log(id);
        props.history.push({
            pathname: "/detail",
            query: {
                videoId: id
            }
        });
    }

    return (
        <LiveWrapper>
            <div>
                {liveCards.length > 0 ?
                    (
                        <>
                            <h2>短视频列表</h2>
                            <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} onStatus={reverseStatus} onDetail={toDetail} />
                        </>
                    )
                    : (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="还没有直播哦～ " />
                    )
                }
            </div>
        </LiveWrapper>
    )
}
export default withRouter(CommentManage);
