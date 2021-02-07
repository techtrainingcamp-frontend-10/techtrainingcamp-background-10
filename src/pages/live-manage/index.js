import React, { memo } from 'react'
import { Button, Modal} from 'antd';
import { useState } from 'react'
import { LiveWrapper } from './style';
import LiveCards from './child-cpn/live-card/LiveCards'

export default memo(function LiveManage() {
    // const [showLiveCard, setShowLiveCard]  = useState(false)
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
        }, 

        {
            title: '直播活动sample4',
            description: '2021-02-09 14:54',
            alt: 'example4',
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            id: 4
        }, 
    ])

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
  
    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      setVisible(true);
    };
  
    // submit in the pop-up window
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    // candle the pop-up window
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

    // handle delete card
    const deleteLiveCard = (id) => {
        setLiveCards(liveCards.filter((liveCard) => liveCard.id !== id))
    }

    return (
        <LiveWrapper>
            <div>
                <h2>直播列表</h2>
                <Button className='new-button' type="primary" onClick={showModal}>
                    新建直播
                </Button>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{modalText}</p>
                </Modal>
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
