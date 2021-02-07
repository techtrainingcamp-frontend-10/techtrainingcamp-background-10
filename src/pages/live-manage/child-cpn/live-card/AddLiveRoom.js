import { useState } from 'react'
import { Button, Modal} from 'antd';
// import LiveRoomForm from './LiveRoomForm'
import { Form, Input } from 'antd';

const AddLiveRoom = ( {onAdd} ) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [title, setTitle] = useState('')
    // const [des, setDes] = useState('')
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

    const onFinish = (values) => {
        // console.log('Success:', values);
        const title=values.title
        const des=values.des
        onAdd( {title , des} )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [modalText, setModalText] = useState(
        <Form
            {...layout}
            name="basic"
            initialValues={{
                title: '直播活动sample1',
                des: '2021-02-10 14:54'
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                <Input />
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
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="new-button" htmlType="submit">
                确认并配置
                </Button>
            </Form.Item>

        </Form>
    )


    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      setVisible(true);
    };
  
    // submit in the pop-up window
    const handleOK = ({  }) => {
    //   setModalText('The modal will be closed after two seconds');
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
                okText="关闭"
            >
                {modalText}
            </Modal>
        </div>
    )
}

export default AddLiveRoom
