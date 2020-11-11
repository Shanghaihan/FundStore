import React, { CSSProperties, useState } from 'react';
import { Layout ,Input ,Select, Button} from 'antd';
import { Row, Col } from 'antd';
import { Menu } from 'antd';
import bg from '../bg.png'
import logo from '../logo.png'
import{SearchOutlined,UserOutlined} from '@ant-design/icons'
import Content from './content'
import { useHistory } from 'react-router';
const { Header} = Layout;
const {Option} = Select;

const Home :React.FC = ()=>{
    let user:string = eval("("+window.sessionStorage.getItem('user') as string+")").username;
    console.log(user);
    let history = useHistory();
    const [state,setState] = useState("home");
    const handleChangeState =(e:any)=>{
        console.log('click ', e);
        setState(e.key);
        history.push("/Content/"+e.key);
    };
    return(
        <div style={CContent}>
            <Header style={{height:'6%',backgroundColor:'rgba(255,255,255,0)',textAlign:'center',maxWidth:'1920px',width:'80%',margin:'0 auto'}}>
                <Row  style={{height:'100%',flexFlow:'nowrap',margin:'0 auto'}}  >
                    <Col span={4} style={{flex:'0 0 auto'}}className="gutter-row" >
                        <h2>
                            <a href="/Home" style={{color:'black'}}> 
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
                            <Menu  onClick={handleChangeState} selectedKeys={[state]} mode="horizontal"  direction="ltr" style={{width:'30%',height:'98%',backgroundColor:'rgba(255,255,255,0)',marginLeft:'0px',borderBottom:'none'}}> 
                                <Menu.Item key="market">
                                    市场
                                </Menu.Item>
                                <Menu.Item key="optional">
                                    自选
                                </Menu.Item>
                                <Menu.Item key="hold">
                                    持有
                                </Menu.Item>
                            </Menu>
                            <div style={{marginLeft:'10px'}}>
                                <Select defaultValue="1.2.1" size="small">
                                    <Option value="1.x">1.x</Option>
                                    <Option value="2.x">2.x</Option>
                                    <Option value="3.x">3.x</Option>
                                    <Option value="4.01">4.01</Option>
                                </Select>
                            </div>
                            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'inline':'none'}} onClick={()=>{history.push("/Content/login")}}>
                                <Button size="small">&nbsp;登&nbsp;&nbsp;录&nbsp;</Button>
                            </div>
                            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'inline':'none'}}>
                                <Button size="small" onClick={()=>{history.push("/Content/register")}}>&nbsp;注&nbsp;&nbsp;册&nbsp;</Button>
                            </div>
                            <div style={{marginLeft:'10px',display:window.sessionStorage.getItem('user')==null?'none':'inline'}}>
                                {user}
                            </div>
                            <a  href=" " style={{color:'black',marginLeft:'10px'}}>
                                <UserOutlined/>
                            </a>
                        </Row>
                       
                    </Col>
                </Row>
            </Header>
            <div style={{height:'95%',textAlign:'center',paddingTop:'20px'}}>
                <Content></Content>
            </div>
        </div>
    )

}
const CContent:CSSProperties={
    height:'100%',
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