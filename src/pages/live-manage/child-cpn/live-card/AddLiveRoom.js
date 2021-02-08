import { useState , useEffect} from 'react'
import { Button, Modal} from 'antd';
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
      setTitle('')
      setDes('')
      setVisible(true)
    };
  
    // submit in the pop-up window
    const handleOK = () => {
      // console.log(title)
      if (title.length > 0 && des.length > 0){
        setConfirmLoading(true);
        setTimeout(() => {
            onAdd( title , des )
            console.log('title reset', title)
            setTitle('')
            setDes('')
            setVisible(false);
            setConfirmLoading(false);
        }, 500);
      }
      else{
        alert('请完整填写直播间信息')
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
                        label="时间"
                        name="des"
                        rules={[
                        {
                            required: true,
                            message: '请输入时间YYYY-MM-DD 00:00',
                        },
                        ]}
                    >
                        <Input value={des} onChange={onChangeDes} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddLiveRoom
