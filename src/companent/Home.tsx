import React, { CSSProperties, useState } from 'react';
import { Layout ,Input ,Select, Button, message,Modal} from 'antd';
import { Row, Col } from 'antd';
import { Menu } from 'antd';
import bg from '../bg.png'
import logo from '../logo.png'
import{AlertOutlined, AreaChartOutlined, PieChartOutlined, SearchOutlined,UserOutlined} from '@ant-design/icons'
import Content from './content'
import { useHistory } from 'react-router';
import Login from './content/Login';
import Progress from './progress';
import e from 'express';
const { Header} = Layout;
const {Option} = Select;
const Home :React.FC = ()=>{
    let user:any= eval("("+window.sessionStorage.getItem('user') as string+")");
    let history = useHistory();
    const [state,setState] = useState("home");
    const [len,setLen] = useState(0);
    const [trans,setTrans] = useState('width 500ms , fill 250ms')
    const handleChangeState =(e:any)=>{
        if(!e.key)
            e.key = 'home';
        setTrans('width 500ms , fill 250ms');
        setLen(1);
        setTimeout(()=>{
            setTrans('width 0ms , fill 0ms');
            setLen(0);
            setState(e.key);
            history.push("/Content/"+e.key);
        },1000)
    
    };
    return(
        <div style={CContent}>
            <Progress percent={len} width={1903} height={2} color={'rgb(24, 144, 255)'} trans={trans}/> 
            <Header style={{height:'6%',backgroundColor:'rgba(255,255,255,0)',textAlign:'center',maxWidth:'1920px',width:'80%',margin:'0 auto'}}>
                <Row  style={{height:'100%',flexFlow:'nowrap',margin:'0 auto'}}  >
                    <Col span={4} style={{flex:'0 0 auto'}}className="gutter-row" >
                        <h2>
                            <a style={{color:'black'}} onClick={handleChangeState}> 
                                <img alt=" " src={logo} style={{height:'50px',marginRight:'0px'}}></img>
                                Goose Wealth
                            </a>
                        </h2>
                        
                    </Col>
                    <Col span={6}>
                        <div style={SearchBox}>
                                <Input placeholder="在goose.Welath中搜索" prefix={<SearchOutlined/>}></Input>
                        </div>
                    </Col>
                    <Col span={14} style={{flex:'1 1 auto'}} offset={2}>            
                        <Row justify="end">  
                            <Menu  onClick={handleChangeState} selectedKeys={[state]} mode="horizontal"  direction="ltr" style={{width:'36%',height:'98%',backgroundColor:'rgba(255,255,255,0)',marginLeft:'0px',borderBottom:'none'}}> 
                                <Menu.Item key="market" icon={<AreaChartOutlined/>}>
                                    市场
                                </Menu.Item>
                                <Menu.Item key="optional" icon={<PieChartOutlined/>}>
                                    自选
                                </Menu.Item>
                                <Menu.Item key="hold" icon={<AlertOutlined/>}>
                                    持有
                                </Menu.Item>
                            </Menu>
                            <div style={{marginLeft:'10px',boxSizing:'border-box'}}>
                                <Select defaultValue="1.2.1" size="small">
                                    <Option value="1.x">1.x</Option>
                                    <Option value="2.x">2.x</Option>
                                    <Option value="3.x">3.x</Option>
                                    <Option value="4.01">4.01</Option>
                                </Select>
                            </div>
                           <Login></Login>
                            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'none':'inline'}}>
                                {user==null?"":user.username}
                            </div>
                            <a  href=" " style={{color:'black',marginLeft:'10px'}}>
                                <UserOutlined/>
                            </a>
                            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'none':'inline'}}>
                                <Button size="small" onClick={()=>{window.sessionStorage.clear();message.success('退出成功!');history.push('/')}}>&nbsp;退&nbsp;&nbsp;出&nbsp;</Button>
                            </div>
                        </Row>
                       
                    </Col>
                </Row>
            </Header>
            <div style={{height:'70%',paddingTop:'20px',width:'75%',margin:'0 auto'}}>
                <Content></Content>
            </div>
        </div>
    )
}
const CContent:CSSProperties={
    height:'120%',
    backgroundImage:'url('+bg+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'100% 100%',
   
}
const SearchBox:CSSProperties={
    width:'250px',
    height:'100%',
    marginLeft:'10px'
}
export default Home