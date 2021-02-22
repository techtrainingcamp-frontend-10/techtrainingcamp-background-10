import React, { memo } from 'react'
import { useState, useEffect } from 'react'

import { getLives } from "@/services/manage";
import { LiveWrapper } from './style';
import AddLiveRoom from './child-cpn/live-card/AddLiveRoom'
import LiveCards from './child-cpn/live-card/LiveCards'
import { Empty } from 'antd';

export default memo(function LiveManage() {
    const [liveCards, setLiveCards] = useState([])

    useEffect(() => {
        // const getCards = async () => {
        //     const cardsFromServer = await fetchCards()
        //     setLiveCards(cardsFromServer)
        // }

        // getCards()
        getLives().then(res => {
            setLiveCards(res.success.list);
            console.log(res.success);
        })
    }, [])

    const fetchCards = async () => {
        const res = await fetch('https://qcmt57.fn.thelarkcloud.com/createLive')
        const data = await res.json()
        console.log(data)
        return data
    }


    const fetchCard = async (id) => {
        const res = await fetch(`https://qcmt57.fn.thelarkcloud.com/createLive/${id}`)
        const data = await res.json()
        console.log(data)
        return data
    }

    // add live card
    const addLiveCard = (title, des) => {
        // const addLiveCard = async (task) => {
        //     const res = await fetch('url', {
        //         method: 'POST',
        //         headers: {
        //         'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(task)
        //     })

        //     const data = await res.json()

        //     setCards([...liveCards, data])

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
