'use strict';
require('../statics/sass/main.scss');

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		this._updateCounter = this._updateCounter.bind(this);
		this.state = { counter: 0 };
	}

	_updateCounter() {

		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (
			<div>
				<div>Hello World from React with ES6</div>
				<div>You have click this button {this.state.counter} times!!!</div>
				<button onClick={this._updateCounter}>Click me!!!</button>
			</div>
			);
	}
}

ReactDom.render(<App/>, document.getElementById('react-root'));