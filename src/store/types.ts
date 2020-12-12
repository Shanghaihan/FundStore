
export const ADD_COUNT = "ADD_COUNT";
export const UPDATE_MarketData = "UPDATE_MarketData";


//Action类型规约
export interface AddCountAction{
    type:typeof ADD_COUNT
}
export interface UpdateMarketData{
    type:typeof UPDATE_MarketData,
    datas:object
}
