import React from 'react';
import { calculateWinner, checkGameOver } from 'game-util'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                xIsNext: true
            }],
            currentMove: 1
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const currentMove = this.state.currentMove;
        const current = history[currentMove - 1];
        let squares = current.squares.slice();
        let xIsNext = current.xIsNext;
        if (checkGameOver(squares) || calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares,
                xIsNext: !xIsNext
            }),
            currentMove: history.length + 1
        });
    }

    jumpTo(move) {
        this.setState({
            currentMove: move + 1
        })
    }

    render() {
        const history = this.state.history;
        const currentMove = this.state.currentMove;
        const current = history[currentMove - 1];
        let squares = current.squares.slice();
        let xIsNext = current.xIsNext;
        const winner = calculateWinner(squares);

        let moves = history.map((step, move) => {
            let desc = move? 'Move #' + move : 'Game Start';
            return (
                <li key={move}>
                    <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if(checkGameOver(squares)) {
            status = 'Game Over.'
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O')
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i) => this.handleClick(i)}
                        xIsNext={xIsNext}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export { Game };