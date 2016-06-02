import React from 'react';
import ReactDOM from 'react-dom';

const Widget = (props) => {
	return (
		<div>
			<b>Set Prop1: </b><input type="text"
				value={props.prop1}
				onChange={props.update} />
			<h1>Prop1: {props.prop1}</h1>
		</div>
	);
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			state1: 'Default Value',
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
				<Widget prop1={this.state.state1}
					update={this.updateState1.bind(this)} />
				<Widget prop1={this.state.state1}
					update={this.updateState1.bind(this)} />
				<Widget prop1={this.state.state1}
					update={this.updateState1.bind(this)} />
				<b>Set State1: </b><input type="text"
					value={this.state.state1}
					onChange={this.updateState1.bind(this)} />
				<h1>State1: {this.state.state1}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<App prop1='My life, my rules!!' prop2={100} />,
	document.getElementById('app')
);
export default App