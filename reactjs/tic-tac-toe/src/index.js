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
            const currentBoard = state.history[state.currentMove - 1];
            if (checkGameOver(currentBoard.squares) || calculateWinner(currentBoard.squares) || currentBoard.squares[action.cell]) {
                return state;
            }
            const cell  = action.cell;
            const cellValue = currentBoard.xIsNext ? 'X' : 'O';
            let newBoard = {
                squares: [].concat(currentBoard.squares.slice(0, cell), cellValue, currentBoard.squares.slice(cell + 1)),
                xIsNext: !currentBoard.xIsNext
            };

            return {
                history: state.history.concat(newBoard),
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
