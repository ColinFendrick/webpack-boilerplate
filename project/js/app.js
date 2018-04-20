import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={() => <div>Hey</div>} />
			</Router>
		);
	}
}

export default App;
