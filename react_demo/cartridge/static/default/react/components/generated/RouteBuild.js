(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports.App = App;
},{"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
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
},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
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

const App = require("./App").App;
const Home = require("./Home").Home;

const MyRoutes = React.createElement(
	Router,
	null,
	React.createElement(Route, { path: '/react/demo4', component: App }),
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
},{"./App":1,"./Home":2,"react":"react","react-router":"react-router"}]},{},[3]);
