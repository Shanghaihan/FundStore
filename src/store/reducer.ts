import { ADD_COUNT, AddCountAction, UpdateMarketData,UPDATE_MarketData } from './types';
import axios from 'axios';
import market from '../companent/content/market';
export function CountReducer(state=0,action:AddCountAction){
    switch(action.type){
        case ADD_COUNT:
            return state + 1;
        default:
            return false;
    }
}
export  function MarketDataReducer(state:object|undefined,action:UpdateMarketData){
    if(state===undefined){
        state={};
    }
    switch(action.type){
        case UPDATE_MarketData:{
            return action.datas;
        }
            
        default:
            return state;
    }
}
