import { Modal, notification, Form, Input, Upload, message, Button } from 'antd';
import { SmileOutlined, UploadOutlined } from '@ant-design/icons';

import { useState } from 'react'
import { getToken, getID } from "@/store/auth";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 15,
  },
};
// const tailLayout = {
//   wrapperCol: {
//     offset: 6,
//     span: 15,
//   },
// };

const AddLiveRoom = ({ onAdd }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')

  const props = {
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    action: "https://qcmt57.fn.thelarkcloud.com/fileUpload",
    data: file => ({
      userId: getID(),
      token: getToken(),
      file: file
    }),
    onChange(info) {
      if (info.file.status !== 'uploading') {
        setDes(info.file.response.url);
        console.log(info.file.response.url, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    }
};

const success = () => {
  message.success("投放成功");
};

const warning = () => {
  message.warning("请完整填写信息");
};

const openNotification = () => {
  notification.open({
    message: '视频已投放',
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
      onAdd(title, des)
      setTitle('')
      setDes('')
      setVisible(false);
      setConfirmLoading(false);
      success()
      openNotification()
    }, 500);
  }
  else {
    warning()
  }
};

// candle the pop-up window
const handleCancel = () => {
  setVisible(false)
};

const onChangeTitle = (e) => {
  setTitle(e.target.value)
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
      okText="投放"
    >
      <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{ title: '' }}
      >
        <Form.Item
          label="作品标题"
          name="title"
          rules={[
            {
              required: true,
              message: '请输入视频标题',
            },
          ]}
        >
          <Input value={title} onChange={onChangeTitle} />
        </Form.Item>

        <Form.Item
          label="您的作品"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Upload {...props} maxCount={1}>
            <Button icon={<UploadOutlined />}>上传视频</Button>
          </Upload>
        </Form.Item>

      </Form>
    </Modal>
  </div>
)
}

export default AddLiveRoom
