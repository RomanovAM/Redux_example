import { createStore } from 'redux';
import {counter} from './reducers'; 

export let store = createStore(counter);

store.subscribe(() =>{
    console.log(store.getState());
});