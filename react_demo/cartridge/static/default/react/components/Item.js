'use strict';

var isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('~/cartridge/scripts/react/lib/React.js');
} else {
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var Item = React.createClass({
	getInitialState: function getInitialState() {
		return {
			count: this.props.initialCount
		};
	},

	_increment: function _increment() {
		this.setState({ count: this.state.count + 1 });
	},

	render: function render() {
		return React.createElement(
			'div',
			{ onClick: this._increment },
			this.state.count
		);
	}
});

if (isServerSide) {
	exports.Item = Item;
} else {
	ReactDOM.render(React.createElement(Item, { initialCount: 7 }), document.getElementById('container'));
}
