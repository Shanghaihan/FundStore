import React,{CSSProperties} from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router';
const Login:React.FC=()=>{
    let history = useHistory();
    async function onFinish(value:any) {
        const result:AxiosResponse = await axios.post("/api/user/findUser",{
            username:value.username,
            password:value.password,
        });
        console.log(result);
        if(result.statusText==="OK"){
            if(result.data.length>0){
                message.success('登录成功!');
            // history.push('/Content/login')
                window.sessionStorage.setItem("user", JSON.stringify(result.data[0]));
                history.push('/')
            }else{
                message.error('用户名或密码错误!');
                value=[];
            }
        }else{
            message.error('登录失败!请检查您的网络')
        }
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