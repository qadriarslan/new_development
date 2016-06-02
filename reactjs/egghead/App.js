import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!!</h1>
			</div>
		);
	}
}

//const Me = () => <h1>Hello to you</h1>

ReactDOM.render(<App />, document.getElementById('app'));
export default App