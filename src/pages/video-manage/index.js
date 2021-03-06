import React, { memo } from 'react'
import { useState, useEffect } from 'react'

import { getVideos, createVideo, deleteVideo } from "@/services/manage";
import AddLiveRoom from './components/AddLiveRoom'
import LiveCards from './components/LiveCards'
import { LiveWrapper } from './style';
import { Empty , message} from 'antd';

export default memo(function VideoManage() {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        getVideos().then(res => {
            setLiveCards(res.success.list);
            console.log(res.success);
        })
    },
        []
    )

    const success = () => {
        message.success('删除成功！');
    };

    // add live card
    const addLiveCard = (title, des) => {
        createVideo(title, des).then(res => {
            // console.log(res);
            getVideos().then(res => {
                setLiveCards(res.success.list);
            })
        });
    }

    // handle delete card
    const deleteLiveCard = (id) => {
        deleteVideo(id).then(res=>{
            success()
            getVideos().then(res => {
                setLiveCards(res.success.list)
            })
        })
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
                <h2>短视频页</h2>
                <AddLiveRoom onAdd={addLiveCard} />
                {liveCards.length > 0 ?
                    (
                        <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} onStatus={reverseStatus} />
                    )
                    : (
                        <>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="空空如也～ 点击上传视频来上传你的第一个作品吧!" />
                        </>
                    )
                }
            </div>
        </LiveWrapper>
    )

})
