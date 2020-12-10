import e from 'express';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { clearInterval, clearTimeout } from 'timers';
import '../../../scrollBank.css'
const ScrollBank:React.FC = ()=>{

    const root = React.useRef<HTMLDivElement>(null);
    const ulControl = React.useRef<HTMLUListElement>(null);
    const [index,setIndex] = useState(0);
    const handleClickchange = (e:any) =>{
        setIndex(e.target.textContent as number);
    }
    const handleLeft = ()=>{
        if(index>0){
            setIndex(index-1);      
        }
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
                    <p>0</p>
                </div>
                <div className='Scroll_item' >
                    <p>1</p>
                </div>
                <div className='Scroll_item' >
                    <p>2</p>
                </div>
                <div className='Scroll_item' >
                    <p>3</p>
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
export default ScrollBank;