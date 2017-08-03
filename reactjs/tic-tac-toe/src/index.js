import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import './index.css';
import { Game } from './components'
import { calculateWinner, checkGameOver } from './game-util';
// ========================================

const gameReducer = (state, action) => {
    if( state === undefined) {
        return {
            history: [{
                squares: Array(9).fill(null),
                xIsNext: true
            }],
            currentMove: 1
        };
    }
    switch(action.type) {
        case 'CELL_CLICK':
            const history = state.history;
            const currentMove = state.currentMove;
            const current = history[currentMove - 1];
            if (checkGameOver(current.squares) || calculateWinner(current.squares) || current.squares[action.cell]) {
                return state;
            }
            // let newCurrent = Object.assign({}, current);
            let newCurrent = JSON.parse(JSON.stringify(current));
            newCurrent.squares[action.cell] = newCurrent.xIsNext ? 'X' : 'O';
            newCurrent.xIsNext = !newCurrent.xIsNext;

            // let newState = Object.assign({}, state);
            let newState = JSON.parse(JSON.stringify(state));
            newState.history.push(newCurrent);
            newState.currentMove = newState.history.length;
            return newState;
        case 'HISTORY_JUMP':
            let jumpState = JSON.parse(JSON.stringify(state));
            // let jumpState = Object.assign({}, state);
            jumpState.currentMove = action.move + 1;
            return jumpState;
        default:
            return state;
    }
}

const store = createStore(gameReducer);

function mapStateToProps(state) {
    return {
        history : state.history,
        currentMove : state.currentMove
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (cell) => dispatch({type: 'CELL_CLICK', cell: cell}),
        jumpTo: (move) => dispatch({type: 'HISTORY_JUMP', move: move})
    };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Game)
// ========================================
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
