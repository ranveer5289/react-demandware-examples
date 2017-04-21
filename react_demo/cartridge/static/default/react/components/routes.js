const isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('react');
	var ReactRouter = require('react-router');
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	var Link = ReactRouter.Link;
} else {
	var React = window.React;
	var ReactRouter = window.ReactRouter;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	var Link = ReactRouter.Link;
	var match = ReactRouter.match;
	var { pathname, search, hash } = window.location;
	var location = pathname + search + hash;

	var Router = ReactRouter.Router;
	var ReactDOM = window.ReactDOM;
	var History = ReactRouter.browserHistory;
}

const App = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'App'
			),
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: '/home' },
						'Home'
					)
				)
			)
		);
	}
});

const Home = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'App'
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

const MyRoutes = React.createElement(
	Router,
	null,
	React.createElement(Route, { path: '/', component: App }),
	React.createElement(Route, { path: '/home', component: Home })
);

if (isServerSide) {
	exports.MyRoutes = MyRoutes;
} else {
	match({ routes: MyRoutes, location: location }, function (error, redirectLocation, renderProps) {
		console.log(renderProps);
		ReactDOM.render(React.createElement(Router, { routes: MyRoutes, history: History }), document.getElementById('app'));
	});
}