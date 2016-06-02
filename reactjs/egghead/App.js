import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!!
				<Me />
			</div>
		);
	}
}

const Me = () => <h1>Hello to you</h1>

export default App