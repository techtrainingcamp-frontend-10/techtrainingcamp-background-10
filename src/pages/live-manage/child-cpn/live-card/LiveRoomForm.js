// import { useState } from 'react'
// import { Form, Input, Button, Checkbox } from 'antd';

// const LiveRoomForm = () => {
//     const layout = {
//         labelCol: {
//           span: 8,
//         },
//         wrapperCol: {
//           span: 16,
//         },
//       };
//       const tailLayout = {
//         wrapperCol: {
//           offset: 8,
//           span: 16,
//         },
//       };

//       const onFinish = (values) => {
//         console.log('Success:', values);
//       };
    
//       const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
      
//     return (
//         <Form
//             {...layout}
//             name="basic"
//             initialValues={{
//                 remember: false,
//             }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             >
//             <Form.Item
//                 label="标题"
//                 name="title"
//                 rules={[
//                 {
//                     required: true,
//                     message: '请输入直播间的名称',
//                 },
//                 ]}
//             >
//                 <Input value={title}/>
//             </Form.Item>

//             <Form.Item
//                 label="时间"
//                 name="des"
//                 rules={[
//                 {
//                     required: true,
//                     message: '请输入时间YYYY-MM-DD 00:00',
//                 },
//                 ]}
//             >
//                 <Input value={des}/>
//             </Form.Item>


//             <Form.Item {...tailLayout}>

//             </Form.Item>
//             </Form>
//     )
// }

// export default LiveRoomForm
