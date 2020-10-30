import { Button } from 'antd';
import React, { CSSProperties } from 'react';
import logo from '../../logo.png'
const home:React.FC=()=>{
    return(
        <div>
            <div style={TTitle}>
                <a href=" " style={{color:'black'}}>
                    Goose We
                    <img alt=" " src={logo} style={{height:'100px',marginRight:'0px'}}></img>
                    lth  
                </a>
            </div>
            <div style={TSitle}>
                贴心的理财顾问，创造无限的财富密码
            </div>
            <Button type="primary" style={{fontSize:"16px",lineHeight:'16px',height:'50px',borderRadius:'25px',marginTop:'40px'}}>开始使用</Button>
            <Button type="primary" ghost style={{fontSize:"16px",lineHeight:'16px',height:'50px',borderRadius:'25px',marginTop:'40px',marginLeft:'40px'}}>使用教程</Button>
    </div>

    )

}
const TTitle:CSSProperties={
    width:'60%',
    height:'15%',
    margin:'0 auto',
    
    color:'black',
    // backgroundColor:'black',
    fontSize:'100px',
    fontWeight:'bolder',
}
const TSitle:CSSProperties={
    width:'60%',
    height:'5%',
    margin:'0 auto',
    marginTop:'10px',
    color:'black',
    // backgroundColor:'black',
    fontSize:'20px',
    fontWeight:'lighter',
}
export default home;