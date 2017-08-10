import React from 'react';
class Counter extends React.Component {
    render() {
        const { value, increment, decrement } = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        );
    }
}

class CounterApp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    increment() {
        this.setState({count: this.state.count + 1});
    }
    decrement() {
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
            <Counter value={this.state.count} increment={this.increment.bind(this)}
                decrement={this.decrement.bind(this)}/>
        );
    }
}

export { Counter, CounterApp };
