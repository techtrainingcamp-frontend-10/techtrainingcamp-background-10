import React, { memo } from 'react'
import { useState, useEffect } from 'react'

import { getLives, createLive, deleteLive } from "@/services/manage";
import { LiveWrapper } from './style';
import AddLiveRoom from './child-cpn/live-card/AddLiveRoom'
import LiveCards from './child-cpn/live-card/LiveCards'
import { Empty , message } from 'antd';

export default memo(function LiveManage() {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        getLives().then(res => {
            setLiveCards(res.success.list);
            console.log(res.success);
        })
    }, [])

    const success = () => {
        message.success('删除成功！');
      };

    // add live card
    const addLiveCard = (title, url) => {

        createLive(title, url).then(res => {
            // console.log(res);
            getLives().then(res => {
                setLiveCards(res.success.list);
            })
        });
        
        getLives().then(res => {
            setLiveCards(res.success.list);
            console.log(res.success);
        })
    }

    // handle delete card
    const deleteLiveCard = (id) => {
        // setLiveCards(liveCards.filter((liveCard) => liveCard.id !== id))
        deleteLive(id).then(res=>{
            success()
            getLives().then(res => {
                setLiveCards(res.success.list);
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
                <h2>直播列表</h2>
                <AddLiveRoom onAdd={addLiveCard} />
                {liveCards.length > 0 ?
                    (
                        <LiveCards liveCards={liveCards} onDelete={deleteLiveCard} onStatus={reverseStatus} />
                    )
                    : (
                        <>
                            {/* <h3>目前没有配置好的直播间，点击 新建直播 来配置您的第一个直播间吧!</h3> */}
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="空空如也～ 点击新建直播来配置您的第一个直播间吧!" />
                        </>
                    )
                }
            </div>
        </LiveWrapper>
    )
})
