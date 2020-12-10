
import React, { CSSProperties} from 'react';

type AppProps={
    percent:number;
    width:number;
    height:number;
    color:string;
    trans:string;
};

const progress:React.FC<AppProps> = (props)=>{
    var {
        percent,      //数字：百分比，从0到1
        width,      //进度条宽度
        height,       //进度条高度
        color,//填充颜色
        trans,
    } = props;

    let w =  percent ? Math.max(height, width * Math.min(percent, 1)):0;
    return(
        <div style={{width:width,height:height,position:'absolute'}}>
            <div style={{width:width,height:height,fill:'#ccc'}}>
              <div style={{width:w,height:height,backgroundColor:color,transition:trans}}></div>  
            </div>
        </div>
    )

}

export default progress;

