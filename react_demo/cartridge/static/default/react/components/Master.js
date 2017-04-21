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

const Login = require("./Login").Login;
const Register = require("./Register").Register;
const Index = require("./Index").Index;

const MyRoutes = React.createElement(
	Router,
	null,
	React.createElement(Route, { path: '/react/demo5', component: Index }),
	React.createElement(Route, { path: '/react/login', component: Login }),
	React.createElement(Route, { path: '/react/signup', component: Register })
);

if (isServerSide) {
	exports.MyRoutes = MyRoutes;
} else {
	match({ routes: MyRoutes, location: location }, function (error, redirectLocation, renderProps) {
		console.log(renderProps);
		ReactDOM.render(React.createElement(Router, { routes: MyRoutes, history: History }), document.getElementById('app'));
	});
}