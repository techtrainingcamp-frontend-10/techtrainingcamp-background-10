import { useState } from 'react'
import { Button, Modal} from 'antd';
import { Form, Input } from 'antd';
import Error from './Error'

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

    const [form] = Form.useForm();

    // show pop-up UI form to set up the new Live Room
    const showModal = () => {
      // not working...
      setTitle({value: ''})
      setDes({value: ''})
      setVisible(true);
    };
  
    // submit in the pop-up window
    const handleOK = () => {
      if (title.value.length > 0 && des.value.length > 0){
        setConfirmLoading(true);
        setTimeout(() => {
            onAdd( title , des )
            setTitle({value: ''})
            setDes({value: ''})
            form.resetFields();
            setVisible(false);
            setConfirmLoading(false);
        }, 50);
      }
      else{
        console.log('error')
      }
    };
  
    // candle the pop-up window
    const handleCancel = () => {
      setVisible(false);
    };

    const onChangeTitle =(e) => {
        setTitle({value: e.target.value});
        form.setFieldsValue({ des: 'Hi, man!' });
    }

    const onChangeDes =(e) => {
        setDes({value: e.target.value});
    }
    
    
    return (
        <div>
        <Button className='new-button' type="primary" onClick={showModal}>
                上传短视频
            </Button>
            <Modal
                title="上传短视频"
                visible={visible}
                onOk={handleOK}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText="取消"
                okText="确认并上传"
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ title: '' }}
                    >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[
                        {
                            required: true,
                            message: '请输入短视频的标题',
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
