import React,{CSSProperties} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Login:React.FC=()=>{
    const onFinish = (values:String) => {
        console.log('Received values of form: ', values);
    }
    return(

        <Form initialValues={{ remember: true }} onFinish={onFinish} style={loginFormStyle}>
            <Form.Item style={{textAlign:'center'}}>
                <h1>Welcome</h1>
            </Form.Item>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" ></Input>
            </Form.Item>
            <Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" type="password"></Input>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                <a  href=" " style={{float:'right'}}>
                    Forgot password
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{width:'100%',margin:'1rem  0 0 0'}}>
                Log in
                </Button>
                    Or <a href="/LoginPanel/Register">register now!</a>
            </Form.Item>
        </Form>

    )
}

const loginFormStyle:CSSProperties={
    width:'300px',
    margin:'0 auto',
    marginTop:'10%'
}
export default Login