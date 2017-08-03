// import { createStore } from 'redux';
import { createStore } from './redux-store';
const counter = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);
const render = () => {
    document.querySelector('#app').innerText = store.getState();
};

store.subscribe(render);
render();

document.querySelector('#increment').addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});

document.querySelector('#decrement').addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
});
