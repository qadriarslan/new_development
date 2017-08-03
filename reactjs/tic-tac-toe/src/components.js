import React from 'react';
import { calculateWinner, checkGameOver } from './game-util';

class Game extends React.Component {
    render() {
        const { history, currentMove } = this.props;

        const current = history[currentMove - 1];
        const squares = current.squares;
        const xIsNext = current.xIsNext;
        const winner = calculateWinner(squares);

        let moves = history.map((step, move) => {
            let desc = move? 'Move #' + move : 'Game Start';
            return (
                <li key={move}>
                    <a href='#' onClick={() => this.props.jumpTo(move)}>{desc}</a>
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
                        onClick={(i) => this.props.handleClick(i)}
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
