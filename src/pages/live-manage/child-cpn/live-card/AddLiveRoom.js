import { useState } from 'react'
import { Button, Modal} from 'antd';
// import LiveRoomForm from './LiveRoomForm'
import { Form, Input } from 'antd';

const AddLiveRoom = ( {onAdd} ) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 15,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 6,
          span: 15,
        },
      };


    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      // not working...
      setTitle({value: ''})
      setDes({value: ''})
      setVisible(true);
    };
  
    // submit in the pop-up window
    const handleOK = () => {
    //   setModalText('The modal will be closed after two seconds');
      if (title.value.length > 0 && des.value.length > 0){
        setConfirmLoading(true);
        setTimeout(() => {
            onAdd( title , des )
            setVisible(false);
            setConfirmLoading(false);
        }, 500);
      }
      else {
          console.log('error')
      }
    };
  
    // candle the pop-up window
    const handleCancel = () => {
      setVisible(false);
    };

    const onChangeTitle =(e) => {
        setTitle({value: e.target.value});
    }

    const onChangeDes =(e) => {
        setDes({value: e.target.value});
    }
    
    
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
                okText="保存并配置"
            >
                <Form
                    {...layout}
                    name="basic"
                    >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[
                        {
                            required: true,
                            message: '请输入直播间的名称',
                        },
                        ]}
                    >
                        <Input onChange={onChangeTitle}/>
                    </Form.Item>

                    <Form.Item
                        label="时间"
                        name="des"
                        rules={[
                        {
                            required: true,
                            message: '请输入时间YYYY-MM-DD 00:00',
                        },
                        ]}
                    >
                        <Input onChange={onChangeDes} />
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default AddLiveRoom
