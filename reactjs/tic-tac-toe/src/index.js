import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import './index.css';
import { Game } from './components'
import { calculateWinner } from './game-util';
// ========================================

const boardReducer = (state = {squares: Array(9).fill(null), xIsNext: true}, action) => {
    switch(action.type) {
        case 'CELL_CLICK':
            const cell  = action.cell;
            const cellValue = state.xIsNext ? 'X' : 'O';
            return {
                squares: [...state.squares.slice(0, cell), cellValue, ...state.squares.slice(cell + 1)],
                xIsNext: !state.xIsNext
            };
        default:
            return state;
    }
};

const gameReducer = (state, action) => {
    if( state === undefined) {
        return {
            history: [boardReducer(undefined, action)],
            currentMove: 1
        };
    }
    switch(action.type) {
        case 'CELL_CLICK':
            const currentBoard = state.history[state.currentMove - 1];
            if (currentBoard.squares[action.cell] || calculateWinner(currentBoard.squares)) {
                return state;
            }
            return {
                history: [...state.history, boardReducer(currentBoard, action)],
                currentMove: state.history.length + 1
            };
        case 'HISTORY_JUMP':
            return Object.assign({}, state, {currentMove: action.move + 1});
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
