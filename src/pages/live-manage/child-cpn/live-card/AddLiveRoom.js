import { useState , useEffect} from 'react'
import { Button, Modal, notification} from 'antd';
import { Form, Input } from 'antd';
import { message, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

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

const AddLiveRoom = ( {onAdd} ) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const success = () => {
      message.success('配置成功');
    };

    const warning = () => {
      message.warning("请完整填写信息");
    };

    const openNotification = () => {
      notification.open({
        message: '小提示',
        description:
          '可以点击直播间卡片来暂停/继续直播哦！',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };

    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      // not working...
      setTitle('')
      setUrl('')
      setVisible(true)
    };
  
    // submit in the pop-up window
    const handleOK = () => {
      // console.log(title)
      if (title.length > 0 && url.length > 0){
        setConfirmLoading(true);
        setTimeout(() => {
            onAdd( title , url )
            console.log('title reset', title)
            setTitle('')
            setUrl('')
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

    const onChangeUrl =(e) => {
        setUrl(e.target.value)
    }
    
    const [form] = Form.useForm();
    
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

                    <Form.Item
                        label="直播源"
                        name="url"
                        rules={[
                        {
                            required: true,
                            message: '请输入直播源URL',
                        },
                        ]}
                    >
                        <Input value={url} onChange={onChangeUrl} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddLiveRoom
