import { Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { CSSProperties, useEffect, useReducer, useRef, useState, useContext } from 'react';
import { connect } from 'react-redux';
import Content from '../content';
import ScrollBank from './Smallcompanent/scrollBank'
import { updateMarketData } from '../../store/action';
import axios from 'axios';
import { TagsOutlined } from '@ant-design/icons';
import DemoPie from './Smallcompanent/PieCharts';
import DemoLine from './Smallcompanent/LineCharts';

interface  Iprops {
    updateMarketData:typeof updateMarketData;
}
const  Market:React.FC<Iprops>=(props)=>{
    //获取数据，创建上下文 
    const [data,setData] = useState(null);
    
    useEffect(()=>{
        const readyData = async()=>{
            axios.defaults.baseURL="http://localhost:3000";
            let res = await (await axios.get('../../marketData.json')).data;
            axios.defaults.baseURL="http://localhost:3300";
            setData(res);
        }
        readyData();
    },[])
    return(
            <div>
                <ScrollBank marketData={data}/>
                <MarketPanel/>  
            </div>
                     
    )
}
const MarketPanel:React.FC=()=>{
    const data=[
        {
            Title:'稳健精选',
            title:'闲钱理财优选，买卖灵活',
            buttonText:['活期理财','进取债券','稳健债基'],
            '活期理财':{
                Title:'活期理财',
                title:'精选货币货债组合，灵活更安心',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+3.06%',
                        year:'近一年收益率',
                        title:'余额理财新选择',
                        name:'汇添富理财加'
                    },
                    {
                        data:"10,0 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+2.47%',
                        year:'近一年收益率',
                        title:'闲钱理财新选择',
                        name:'博时货币佳'
                    }
                ]
            },
            '进取债券':{
                Title:'进取债券',
                title:'债基打底，轻量参与股票投资，攻守兼备',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+12.69%',
                        year:'近一年收益率',
                        title:'稳重求进，增强回报',
                        name:'易方达增强回报债券A'
                    },
                    {
                        data:"10,0 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+8.06%',
                        year:'近一年收益率',
                        title:'追求财富的稳健增长',
                        name:'光大安和债券A'
                    }
                ]
            },
            '稳健债基':{
                Title:'稳健债基',
                title:'精选优选债基，近一年收益率超4%',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+5.18%',
                        year:'近一年收益率',
                        title:'强势债基，理财优品',
                        name:'富国天利增长债券'
                    },
                    {
                        data:"10,0 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+4.12%',
                        year:'近一年收益率',
                        title:'权威大奖收割基',
                        name:'招商产产业债券A'
                    }
                ]
            },

        },
        {
            Title:'追求收益',
            title:'投资进阶精选，行业前20%',
            buttonText:['精选指数','绩优股混','投资海外'],
            '精选指数':{
                Title:'精选指数',
                title:'精选高价值指数，投资潜力TOP10',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+179.01%',
                        year:'近三年涨幅跌',
                        title:'抱紧茅台五粮液大腿',
                        name:'招商中证白酒指数分级'
                    },
                    {
                        data:"10,13 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+23.05%',
                        year:'近三年涨幅跌',
                        title:'捕捉5G信息牛',
                        name:'广发信息技术连接C'
                    }
                ]
            },
            '绩优股混':{
                Title:'绩优股混',
                title:'历史业绩领先，博得更高收益',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+151.44%',
                        year:'近三年涨幅跌',
                        title:'超180万人购买',
                        name:'景顺长新新兴成长混合'
                    },
                    {
                        data:"10,13 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+151.23%',
                        year:'近三年涨幅跌',
                        title:'牛股猎手，火力全开',
                        name:'景顺长城鼎益混合(LOF)'
                    }
                ]
            },
            '投资海外':{
                Title:'投资海外',
                title:'布局海外高潜公司，共享海外发展红利',
                content:[
                    {
                        data:"10,40 20,20 30,10 32,12 35,5 40,10 50,8",
                        lirun:'+100.22%',
                        year:'近三年涨幅跌',
                        title:'10元出境不是梦',
                        name:'汇添富全球移动互联灵活配置...'
                    },
                    {
                        data:"10,13 20,20 30,20 32,12 35,5 40,10 45,8",
                        lirun:'+62.73%',
                        year:'近三年涨幅跌',
                        title:'10元海淘美国巨头',
                        name:'嘉实美国成长股票(QDll)'
                    }
                ]
            },

        }

    ]
    return(
        <div style={PanelBox}>
            <PanelItem content={data[0]}/>
            <PanelItem content={data[1]}/>
        </div>
    )
}
type AppProps={
    content:any
}
const PanelItem:React.FC<AppProps>=(props)=>{
    var {content} = props;
    const root = useRef<HTMLDivElement>(null);
    const [name,setName]= useState(content.buttonText[0]);
    const handleChange=(e:any)=>{
        if(root.current){
            root.current.childNodes.forEach(ele=>{(ele as HTMLDivElement).style.backgroundColor='white';(ele as HTMLDivElement).style.color='gray'});
        }
        e.target.style.backgroundColor="rgb(24, 144, 255)";
        e.target.style.color="white";
        setName(e.target.textContent);
       
    }
    return(
        <div style={itemBox}>
            <div style={{display:'flex',margin:'10px',height:'10%'}}>
                <h2 style={{fontWeight:'normal',userSelect:'none'}} >{content.Title} </h2>
                <p style={{display:'inline',transform:'translateY(-1px)',fontSize:'20px',color:'gray'}}>&ensp;|&ensp; </p>
                <p style={{display:'inline',transform:'translateY(6px)',fontSize:'15px',color:'gray'}}> {content.title}</p>
            </div>
            <div ref={root} style={{display:'flex',margin:'0 0 10px 10px'}} >
                <div style={button_active}  onClick={handleChange}>{content.buttonText[0]}</div>
                <div style={button} onClick={handleChange}>{content.buttonText[1]}</div>
                <div style={button} onClick={handleChange}>{content.buttonText[2]}</div>
            </div>
            <ItemContent content={content[name]}/>

        </div>
    )
}

const ItemContent:React.FC<AppProps>=(props)=>{
    var {content} = props;
    return(
        <div style={{width:'97%',height:'70%',backgroundColor:'white',margin:'10px',borderRadius:'4px',padding:'0px',userSelect:'none'}}>
            <div style={{display:'flex',backgroundImage:'linear-gradient(rgba(24, 144, 255,0.2),white)',height:'20%',padding:'10px'}}>
                <div style={{color:'rgba(123,104,238,0.7)',fontWeight:'bold'}}>{content.Title} &ensp;</div>
                <div style={{color:'rgba(123,104,238,0.4)',fontWeight:'bold'}}>{content.title}</div>
            </div>
            <div style={{width:'100%',height:'39.5%',margin:'0 0 1% 0',borderBottom:'1px solid rgb(211,211,211)',display:'flex'}}>
                <div style={{width:'100px',height:'50px',margin:'5px',alignSelf:'center'}}>
                    <svg version="1.1">
                        <polyline points={content.content[0].data} style={{fill:'white',stroke:'#68f',strokeWidth:'2'}}/>
                    </svg>
                </div>
                <div style={{alignSelf:'center',width:'100px'}}>
                    <div style={{fontSize:'22px',color:'red'}}>{content.content[0].lirun}</div>
                    <div style={{fontSize:'15px',color:'gray'}}>{content.content[0].year}</div>
                </div>
                <div style={{alignSelf:'center',margin:'0 0 0 50px'}}>
                    <div style={{fontSize:'20px',color:'black'}}>{content.content[0].title}</div>
                    <div style={{fontSize:'15px',color:'gray'}}>{content.content[0].name}</div>
                </div>

            </div>
            <div style={{width:'100%',height:'39.5%',display:'flex'}}>
                <div style={{width:'100px',height:'50px',margin:'5px',alignSelf:'center'}}>
                    <svg version="1.1">
                        <polyline points={content.content[0].data} style={{fill:'white',stroke:'#68f',strokeWidth:'2'}}/>
                    </svg>
                </div>
                <div style={{alignSelf:'center',width:'100px'}}>
                    <div style={{fontSize:'22px',color:'red'}}>{content.content[1].lirun}</div>
                    <div style={{fontSize:'15px',color:'gray'}}>{content.content[1].year}</div>
                </div>
                <div style={{alignSelf:'center',margin:'0 0 0 50px'}}>
                    <div style={{fontSize:'20px',color:'black'}}>{content.content[1].title}</div>
                    <div style={{fontSize:'15px',color:'gray'}}>{content.content[1].name}</div>
                </div>
                
            </div>

        </div>
    )
}
type Cardprops = {
    data:any
}
export const ItemCard:React.FC<Cardprops>=(props)=>{
    var { data } =props;
    useEffect(() => {
        return () => {
        }
    }, [])
    return(
        <div style={{width:'100%',height:'90%',textAlign:'start',display:'flex'}}>
            <div style={{width:'45%',height:'90%'}}>
                <div style={{fontSize:'18px',
                    fontWeight:'normal',
                    margin:'10px',
                    color:'black',
                    display:'flex'
                    }}>
                    { data===null?'':data.name}
                </div>
                <div style={{width:'100%',
                    height:'15%',
                    // backgroundColor:'green',
                    margin:'10px',
                    wordBreak:'normal',
                    wordWrap:'break-word',
                    color:'gray',
                    borderBottom:'1px solid grey'}}>
                <TagsOutlined />
                {data===null?'':data.text}
                </div>
                <div style={{display:'flex',
                    width:'100%',
                    margin:'0 10px 10px 10px',
                    height:'20%',
                    borderBottom:'1px solid grey'
                    }}>
                    <div>
                        <div style={{color:'gray',margin:'10px'}}>近一年收益率</div>
                        <div style={{color:'red',margin:'10px',fontSize:'24px'}}>{data===null?'':data.lirun}</div>
                    </div>
                    <div style={{transform:'translateX(100px)'}}>
                        <div style={{color:'gray',margin:'10px'}}>产品期限</div>
                        <div style={{margin:'10px',fontSize:'24px'}}>{data===null?'':data.period}</div>
                    </div>
                
                </div> 
                <div id="container" style={{width:'100%',height:'55%',margin:'10px'}}>
                    <DemoPie data={data===null?'':data.pieData}/>
                </div>
            </div>
            <div style={{width:'50%',height:'90%',margin:'10px 0 0 20px'}}>
                <div style={{fontSize:'18px',margin:'0 0 10px 0'}}>业绩走势</div>
                <div style={{width:'100%',height:'80%'}}>
                    <DemoLine/>
                </div>
                <div style={{textAlign:'center'}}>
                    <div style={{fontSize:'14px',backgroundColor:'rgba(128,128,128,0.1)'}}>开放买入，开放卖出</div>
                    <Button type="primary" style={{width:'150px',transform:'translateX(107%)',margin:'10px'}}>买入</Button>
                </div>
            </div>
        </div>
    )
}
interface coverProps{
    vis?:boolean
} 

export const CoverPanel:React.FC<coverProps>=(props)=>{
    return(
        <div style={{
            position:'absolute',
            width:'1920px',
            height:'2500px',
            backgroundColor:'grey',
            }}  
        >
        </div>
    )

}
const PanelBox:CSSProperties={
    width:'100%',
    height:'400px',
    display:'flex',
    padding:'0 0 0 40px'
}
const itemBox:CSSProperties={
    width:'48%',
    height:'95%',
    alignSelf:'center',
    borderRadius:'10px',
    backgroundColor:'rgba(128, 128, 128,0.0)',
    margin:'0 2% 0 0',
    padding:'5px'
}
const button:CSSProperties={
    width:'70px',
    height:'25px',
    color:'gray',
    borderRadius:'10px',
    cursor:'pointer',
    backgroundColor:'white',
    textAlign:'center',
    margin:'0 10px 0 0',
}
const button_active:CSSProperties={
    width:'70px',
    height:'25px',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer',
    backgroundColor:'rgb(24, 144, 255)',
    textAlign:'center',
    margin:'0 10px 0 0',

}


export default  connect(  updateMarketData )(Market);