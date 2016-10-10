'use strict';

var isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('~/cartridge/scripts/react/lib/React.js');
} else {
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var HelloMessage = React.createClass({

	getInitialState: function getInitialState() {
		return { surname: 'raghuwanshi' };
	},

	handleClick: function handleClick() {
		alert('You clicked!');
	},

	render: function render() {
		return React.createElement(
			'div',
			{ onClick: this.handleClick },
			'Hello ',
			this.props.name
		);
	}
});

if (isServerSide) {
	exports.HelloMessage = HelloMessage;
} else {
	ReactDOM.render(React.createElement(HelloMessage, { name: 'Ranveer' }), document.getElementById('container'));
}