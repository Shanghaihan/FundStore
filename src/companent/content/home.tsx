import { Button, Col, Row } from 'antd';
import React, { CSSProperties } from 'react';
import logo from '../../logo.png'
import '../../App.css'
import { Typography } from 'antd';
import medicine from '../../medicine.jpg'
import growth from '../../growth.jpg'
const classNames = require('../../App.css')
const { Title } = Typography;
const home:React.FC=()=>{
    return(
        <div>
            <div style={{textAlign:'center'}}>
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
            

            <div className='blockContent'>
                <Title level={2}  style={{fontWeight: 'lighter', color: 'rgb(49, 70, 89)',width:'100%'}}>精彩推荐</Title>

                <Row style={{width:'100%',marginTop:'50px'}}>
                    <Col span={13}>
                        <a href="https://zhuanlan.zhihu.com/p/116851045" className='blockContent_main'>
                        <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*fa7ZRofs73wAAAAAAAAAAAAAARQnAQ" alt="如何选择适合自己的投资组合？" width="100%" height="100%" className={classNames.blockContentImg}/>
                        <div className='blockContent_text'>
                            <Title level={4} style={{color:'white'}}>最优解的投资组合方式</Title>
                            <div className="ant-typography"  style={{fontSize:'13px',color:'white'}}>如何完成利益最大化以及达成基金目标？</div>
                        </div>
                        </a>
                    </Col>
                    <Col span={10} offset={1}>
                        <Row>
                        <Col >
                            <a href="https://baijiahao.baidu.com/s?id=1683696209993102785" className='blockContent_main' style={{height:'215px',marginBottom:'10px'}}>
                            <img src={medicine} alt="如何选择适合自己的投资组合？" width="100%" height="100%" className={classNames.blockContentImg}/>
                            <div className='blockContent_text'>
                                <Title level={4} style={{color:'white'}}>数字人：公募基金领投战配 数字医学迎来发展契机</Title>
                                <div className="ant-typography"  style={{fontSize:'13px',color:'white'}}>医教市场加快发展,不断拓展应用范围,助力未来发展</div>
                            </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9436392798130401356%22%7D&n_type=1&p_from=4" className='blockContent_main' style={{height:'215px'}}>
                            <img src={growth} alt="如何选择适合自己的投资组合？" width="100%" height="100%" className={classNames.blockContentImg}/>
                            <div className='blockContent_text'>
                                <Title level={4} style={{color:'white'}}>庄家是进场或出逃，只用一个“成交量”指标</Title>
                                <div className="ant-typography"  style={{fontSize:'13px',color:'white'}}>分析成交量，对我们有什么帮助?</div>
                            </div>
                            </a>
                        </Col>



                        </Row>
                    </Col>

                </Row>
            </div>
          
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
    textAlign:'center'
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
    textAlign:'center'
}
export default home;