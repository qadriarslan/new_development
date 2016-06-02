import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			state1: 'This is my State1.',
			state2: 10
		};
	}
	updateState1(e) {
		this.setState({
			state1: e.target.value
		})
	}
	render() {
		return (
			<div>
				<b>Set State1: </b><input type="text"
					onChange={this.updateState1.bind(this)} />
				<h1>State1: {this.state.state1}</h1>
				<h1>Prop1: {this.props.prop1}</h1>
				<h2>Prop2: {this.props.prop2}</h2>
			</div>
		);
	}
}

App.propTypes = {
	prop1: React.PropTypes.string,
	prop2: React.PropTypes.number.isRequired
}

App.defaultProps = {
	prop1: 'Hello World!!'
}

ReactDOM.render(
	<App prop1='My life, my rules!!' prop2={100} />,
	document.getElementById('app')
);
export default App