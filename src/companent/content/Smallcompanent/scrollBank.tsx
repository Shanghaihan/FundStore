import e from 'express';
import React, { CSSProperties, useEffect, useRef, useState, useContext } from 'react';
import { clearInterval, clearTimeout } from 'timers';
import '../../../scrollBank.css'
import { connect } from  'react-redux'
import { addCount, updateMarketData } from '../../../store/action';
import { AppState } from '../../../store/index';
import axios from 'axios';
import { ItemCard } from '../market';

type APPprops = {
    marketData:any
}

const ScrollBank:React.FC<APPprops> = (props)=>{  
    //获取数据，以此来展示market信息面板传值
    var { marketData } = props;
    const [data,setData] = useState(null);
    const root = React.useRef<HTMLDivElement>(null);
    const ulControl = React.useRef<HTMLUListElement>(null);
    const [index,setIndex] = useState(0);
    const handleClickchange = (e:any) =>{
        setIndex(e.target.textContent as number);
    }
    const handleLeft = ()=>{
        if(index>0){
            setIndex(index-1);      
        };
    }
    const handleRight = ()=>{
        if(index<3){
            setIndex(index+1);      
        }
    }
    useEffect(() => {
        (ulControl.current as HTMLUListElement).childNodes.forEach(ele=>{(ele as HTMLLIElement).className="li_list"});
        ((ulControl.current as HTMLUListElement).childNodes[index] as HTMLLIElement).className="li_list_active";
        if(root.current){
            root.current.childNodes.forEach(ele=>{(ele as HTMLDivElement).className="Scroll_item"});
            (root.current.childNodes[index] as HTMLDivElement).className="Scroll_item_active";
            let s:string = 'translate3d('+(-950)*index+'px,0,0)'
            root.current.style.transform=s;
        }
        return () => {
        }
    }, [index])

    return(
        <div style={Scroll}> 
            <div className="leftNode" onClick={handleLeft}></div>
            <div className="rightNode" onClick={handleRight}></div>
            <div style={Scroll_list} ref={root} >
                <div className='Scroll_item_active'>
                    <div style={{
                        textAlign:'center',
                        height:'10%',
                        width:'100%',
                        backgroundImage:'linear-gradient(rgba(24, 144, 255,0.5),white)',
                        color:'white',
                        fontSize:'20px'
                    }}>
                    产&nbsp;品&nbsp;推&nbsp;荐
                    </div>
                    <ItemCard data={marketData===null?null:marketData['汇添富理财加']}></ItemCard>
                </div>
                <div className='Scroll_item' >
                    <div style={{
                        textAlign:'center',
                        height:'10%',
                        width:'100%',
                        backgroundImage:'linear-gradient(rgba(24, 144, 255,0.5),white)',
                        color:'white',
                        fontSize:'20px'
                    }}>
                    产&nbsp;品&nbsp;推&nbsp;荐
                    </div>
                    <ItemCard data={marketData===null?null:marketData['博时货币佳']}></ItemCard>
                </div>
                <div className='Scroll_item' >
                    <div style={{
                        textAlign:'center',
                        height:'10%',
                        width:'100%',
                        backgroundImage:'linear-gradient(rgba(24, 144, 255,0.5),white)',
                        color:'white',
                        fontSize:'20px'
                    }}>
                    产&nbsp;品&nbsp;推&nbsp;荐
                    </div>
                    <ItemCard data={marketData===null?null:marketData['景顺长城基金']}></ItemCard>
                </div>
                <div className='Scroll_item' >
                    <div style={{
                        textAlign:'center',
                        height:'10%',
                        width:'100%',
                        backgroundImage:'linear-gradient(rgba(24, 144, 255,0.5),white)',
                        color:'white',
                        fontSize:'20px'
                    }}>
                    产&nbsp;品&nbsp;推&nbsp;荐
                    </div>
                    <ItemCard data={marketData===null?null:marketData['招商基金财富']}></ItemCard>
                </div>
            </div>
            <ul ref={ulControl} onClick={handleClickchange} className='ul_list'>
                <li className= 'li_list_active'> 
                    <button>0</button>
                </li>
                <li className= 'li_list'>
                    <button>1</button>
                </li>
                <li className= 'li_list'>
                    <button>2</button>
                </li>
                <li className= 'li_list'>
                    <button>3</button>
                </li>
            </ul>
           
        </div>
    )
}
const Scroll:CSSProperties={
    width:'1000px',
    height:'600px',
    // backgroundColor:'tomato',
    margin:'0 auto',
    padding:'25px',
    textAlign:'center',
    position:'relative'
}
const Scroll_list:CSSProperties={
    width:'5000px',
    display:'flex',
    transition:'all 1s',
}

 
 export default  ScrollBank;



