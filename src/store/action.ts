import { ADD_COUNT,UPDATE_MarketData } from './types';
export function addCount(){
    return{
        type:ADD_COUNT
    }
}

export function updateMarketData(data:object){
    return{
        type:UPDATE_MarketData,
        datas:data
    }
}