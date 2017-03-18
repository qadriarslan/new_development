import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: "qadriarslan"
        };
    }
    handleChange(e) {
        this.setState({username: e.target.value})
    }
    render() {
        return (
            <div>
                <Greeter username={this.state.username}></Greeter>
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

class Greeter extends React.Component {
    render() {
        return (
            <div>
                <p>Hello <span style={{color:'red'}}>{this.props.username}</span>!! How are you today??</p>
            </div>
        );
    }
}

export default App