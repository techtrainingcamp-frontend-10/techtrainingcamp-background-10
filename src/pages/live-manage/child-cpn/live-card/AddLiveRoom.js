import { useState } from 'react'
import { Button, Modal} from 'antd';

const AddLiveRoom = () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState()
  
    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      setVisible(true);
    };
  
    // submit in the pop-up window
    const handleOK = ({  }) => {
    //   AddLiveCard({  })
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
    
    return (
        <div>
        <Button className='new-button' type="primary" onClick={showModal}>
                新建直播
            </Button>
            <Modal
                title="新建直播"
                visible={visible}
                onOk={handleOK}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText="取消"
                okText="确认并配置"
            >
                <p>{modalText}</p>
            </Modal>
        </div>
    )
}

export default AddLiveRoom
