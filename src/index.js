import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/counter'
import ReduceCounter from './reducers/reduce'

const store = createStore(ReduceCounter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        
        onIncr={() => store.dispatch({type: 'incr'})}
        onDecr={() => store.dispatch({type: 'decr'})}
    />,
    rootEl
);

render();
store.subscribe(render);