import React,{CSSProperties,useState} from 'react';
import { Form, Input, Button, Checkbox,message ,Modal,Menu,Spin} from 'antd';
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';
import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router';
const Login:React.FC=()=>{

    let history = useHistory();
    //设置panel状态
    const [panelState,setPanelState] =useState(false);
    const [loginForm] = Form.useForm();
    const [registerForm] = Form.useForm();
    const handleChangeState=(panelVisible:boolean)=>{
        setPanelState(panelVisible)
    };
    const [LRState,setLRState] =useState("login");
    const handleChangeLRState=(e:any)=>{
        setLRState(e.key)
    };
    const useLogin = ()=>{
        const [pending,setPending] = useState(false);
        //数据请求
        const [result,setResult] = useState(false);
        const load = async (value:any) =>{
            setPending(true);
            setResult(false);
            const res:AxiosResponse = await axios.post("/api/user/findUser",{
                username:value.username,
                password:value.password,
            });
            if(res.data.length>0){
                setResult(true);
                message.success('登录成功!');
                window.sessionStorage.setItem("user", JSON.stringify(res.data[0]));
                loginForm.resetFields();
                history.push('/');
                handleChangeState(false)
            }else{
                setResult(false);
                message.error('用户名或密码错误!');
                loginForm.resetFields();
            }
            setPending(false);
        }
        return{result,pending,load};
    }
    const Login = useLogin();
    const useRegister = ()=>{
        const [pending,setPending] = useState(false);
        //数据请求
        const [result,setResult] = useState(false);
        const load = async (value:any) =>{
            setPending(true);
            setResult(false);
            const res:AxiosResponse = await axios.post("/api/user/addUser",{
                username:value.username,
                password:value.password,
                email:value.email
            });
            console.log(res);
            if(res.statusText==="OK"){
                setResult(true);
                message.success('注册成功!');
                registerForm.resetFields();
                setLRState('login');
            }else{
                setResult(false);
                message.error('注册失败，请检查网络后再试!')
            }
            setPending(false);
        }
        return {result,pending,load}
    }
    const Register = useRegister();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 30 },
    };
    return(
        <div>
            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'inline':'none'}} >
                <Button size="small" onClick={()=>{handleChangeState(true);setLRState("login")}}>&nbsp;登&nbsp;&nbsp;录&nbsp;</Button>
            </div>
            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'inline':'none'}}>
                <Button size="small" onClick={()=>{handleChangeState(true);setLRState("register")}}>&nbsp;注&nbsp;&nbsp;册&nbsp;</Button>
            </div>
            <Modal
                title={
                    <Menu onClick={handleChangeLRState}  selectedKeys={[LRState]} mode="horizontal"  direction="ltr" style={{width:'30%',height:'98%',backgroundColor:'rgba(255,255,255,0)',marginLeft:'0px',borderBottom:'none'}}> 
                        <Menu.Item key="login">
                            登录
                        </Menu.Item>
                        <Menu.Item key="register">
                            注册
                        </Menu.Item>
                    </Menu>
                }
                centered
                visible={panelState}
                onOk={() => handleChangeState(false)}
                onCancel={() => handleChangeState(false)} 
                footer={null} 
                forceRender
                >
                    <div  style={{padding:'0 100px 0 100px'}}>
                        <Form form={loginForm} initialValues={{ remember: true }}  onFinish={Login.load}  style={{ width:'50%',margin:'0 auto',display:LRState==='login'?"inline":"none"}}>
                            <Form.Item style={{textAlign:'center'}}>
                                <h1>Welcome</h1>
                            </Form.Item>
                            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" ></Input>
                            </Form.Item>
                            <Form.Item name="password"  rules={[{ required: true, message: '请输入密码!' }]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码" type="password"></Input>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                                <a  href=" " style={{float:'right'}}>
                                    忘记密码
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width:'100%',margin:'1rem  0 0 0'}}>
                                    {Login.pending?'登录中...':'登录'}
                                </Button>
                                     {/* <a href=" ">马上注册!</a> */}
                            </Form.Item>
                        </Form>
                    </div>
                    <div  style={{padding:'0 100px 0 50px'}}>
                        <Form  form={registerForm} {...layout} initialValues={{ remember: true }} onFinish={Register.load} style={{ width:'20rm',margin:'0 auto',display:LRState==='register'?"inline":"none"}}>
                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username' }]}   label="用户名">
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" ></Input>
                            </Form.Item>
                            <Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password' }]}   label="密码">
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
                            </Form.Item>

                            <Form.Item name="confirm" dependencies={['password']} hasFeedback    label="重复密码:"
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
                            <Form.Item name="email"  rules={[ {type: 'email',message: 'The input is not valid E-mail!'},{required: true,message: 'Please input your E-mail!',}]}   label="邮箱">
                                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" type="text"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width:'66%',margin:'0rem  0 0 6.8rem'}}>{Register.pending?'注册中...':'注册'}</Button>
                            </Form.Item>
                        </Form>
                    </div>
                

                
            </Modal>
        </div>
    
    )
}

export default Login