import { useState , useEffect} from 'react'
import { Button, Modal, notification} from 'antd';
import { Form, Input } from 'antd';
import { message, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

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

    const success = () => {
      message.success("上传成功");
    };

    const warning = () => {
      message.warning("请完整填写信息");
    };

    const openNotification = () => {
      notification.open({
        message: '视频已上传',
        description:
          '现在大家可以看到您的作品啦',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };

    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      // not working...
      setTitle('')
      setDes('')
      setVisible(true)
    };
  
    // submit in the pop-up window
    const handleOK = () => {
      // console.log(title)
      if (title.length > 0) {
        setConfirmLoading(true);
        setTimeout(() => {
            onAdd( title , des )
            setTitle('')
            setDes('')
            setVisible(false);
            setConfirmLoading(false);
            success()
            openNotification()
        }, 500);
      }
      else{
        warning()
      }
    };
  
    // candle the pop-up window
    const handleCancel = () => {
      setVisible(false)
    };

    const onChangeTitle =(e) => {
        setTitle(e.target.value)
    }

    const onChangeDes =(e) => {
        setDes(e.target.value)
    }
    
    const [form] = Form.useForm();
    
    return (
        <div>
        <Button className='new-button' type="primary" onClick={showModal}>
                上传视频
            </Button>
            <Modal
                title="上传视频"
                visible={visible}
                onOk={handleOK}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText="取消"
                okText="上传视频"
            >
                <Form
                    form={form}
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
                        <Input value={title} onChange={onChangeTitle}/>
                    </Form.Item>

                    {/* <Form.Item
                        label="时间"
                        name="des"
                        rules={[
                        {
                            required: true,
                            message: '请输入时间YYYY-MM-DD 00:00',
                        },
                        ]}
                    >
                        <Input value={des} onChange={onChangeDes} /> */}
                    {/* </Form.Item> */}
                </Form>
            </Modal>
        </div>
    )
}

export default AddLiveRoom
