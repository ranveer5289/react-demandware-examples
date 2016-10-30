const isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('react');
	var ReactRouter = require('react-router');
} else {
	var React = window.React;
	var ReactRouter = window.ReactRouter;
}

var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

const Home = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Home'
			),
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: '/Test' },
						'Test'
					)
				)
			)
		);
	}
});

exports.Home = Home;