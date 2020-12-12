import {combineReducers,createStore} from 'redux'
import { CountReducer, MarketDataReducer } from './reducer';

const  rootReducer = combineReducers({
    count:CountReducer,
    marketData:MarketDataReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore(){
    const store = createStore(rootReducer);
    return store;
}