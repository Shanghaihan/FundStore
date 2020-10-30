import React, { CSSProperties } from 'react';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined ,MailOutlined } from '@ant-design/icons';
import axios, { AxiosResponse } from 'axios'
const Register:React.FC =()=>{
    async function onFinish(value:any) {
        const result:AxiosResponse = await axios.post("http://localhost:5000/api/user/addUser",{
            username:value.username,
            password:value.password,
            email:value.email
        });
        console.log(result);
    }

    return(
        <Form initialValues={{ remember: true }} onFinish={onFinish} style={FormSt}>
            <Form.Item>
                <h2>Register</h2>
            </Form.Item>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" ></Input>
            </Form.Item>
            <Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password' }]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
            </Form.Item>

            <Form.Item name="confirm" dependencies={['password']} hasFeedback 
            rules={[{ required: true, message: 'please confirm your password'},
            ({getFieldValue})=>({
                validator(rule,value){
                    if(!value || getFieldValue ('password')===value){
                        return Promise.resolve();
                    }
                    return Promise.reject("The two passwords that you entered do not match!")

                }
            }),
            ]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
            </Form.Item>
            <Form.Item name="email"  rules={[ {type: 'email',message: 'The input is not valid E-mail!'},{required: true,message: 'Please input your E-mail!',}]}>
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" type="text"></Input>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{width:'100%',margin:'0rem  0 0 0'}}>Register</Button>
            </Form.Item>
        </Form>
    )
}


const FormSt:CSSProperties={
    width:'300px',
    padding:'10px',
    margin:'0 auto',
    marginTop:'10%'
}
export default Register;