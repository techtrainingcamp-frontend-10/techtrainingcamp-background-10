import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { setToken } from "@/store/auth";
import Passport from './Passport'

const UserLogin = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
  const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
  };
    
  const onFinish = (values) => {
      console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  

  return (
      <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input onInput={(e)=>{setUsername(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password onInput={(e)=>{setPassword(e.target.value)}}/>
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" disabled={!validateForm()} onClick={() => {    
          // 登录操作
          const p = new Passport();
          p.login(username, password, () => {
              // 登录成功时，跳转页面
              setToken(username)
              props.history.push('/live');
          })
        }}>
          登录
        </Button>
      <Form.Item>
         您是新用户？ <a href="/register">注册</a>
      </Form.Item>
      </Form.Item>
    </Form>
    )
}

export default withRouter(UserLogin)
