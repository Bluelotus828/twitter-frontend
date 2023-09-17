import { useState } from 'react';
import { Button, Input, Form, Dialog } from 'antd-mobile';
import './index.css';

const initialValues = {
  username: '哈哈哈',
  password: '12345'
};

const Login = () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <div className="login">
      <Form 
        form= {form}
        layout='horizontal' mode='card' initialValues={initialValues}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            登录
          </Button>
        }
      >
          <Form.Item label='用户名' name='username' >
            <Input placeholder='请输入用户名' clearable/>
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' clearable type='password' />
          </Form.Item>
        </Form>     
    </div>
  );
}

export default Login;
