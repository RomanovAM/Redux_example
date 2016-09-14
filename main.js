//import React from 'react';
//import {render} from 'react-dom';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';
import {store} from './store';
/********************************************************************/
let make = store.dispatch;

make(add(5,5));


make({ type: 'CLS' });

make({ type: 'INCREMENT' });

make({ type: 'INCREMENT' });

make({ type: 'DECREMENT' });

//alert("Привет");