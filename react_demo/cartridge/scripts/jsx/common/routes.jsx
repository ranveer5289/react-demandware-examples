const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
	var React = require( 'react' );
	var ReactRouter = require('react-router');
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	var Link  = ReactRouter.Link;
}
else
{
	var React = window.React;
	var ReactRouter = window.ReactRouter;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	var Link = ReactRouter.Link;
	var match = ReactRouter.match;
	var { pathname, search, hash } = window.location;
	var location = pathname+search+hash;

	var Router = ReactRouter.Router;
	var ReactDOM = window.ReactDOM;
	var History = ReactRouter.browserHistory;
}

const App = React.createClass( {
	  render : function() {
			return (
			  <div>
				<h1>App</h1>
				<ul>
				  <li><Link to="/home">Home</Link></li>
				</ul>
			  </div>
			)
		}
} );


const Home = React.createClass( {
	  render : function() {
			return (
			  <div>
				<h1>App</h1>
				<ul>
				  <li><Link to="/Test">Test</Link></li>
				</ul>
			  </div>
			)
		}
} );

const MyRoutes = (
		<Router>
			<Route path='/' component={App}/>
			<Route path='/home' component={Home}/>
		</Router>
)


if ( isServerSide )
{
	exports.MyRoutes =  MyRoutes
}
else
{
	match({ routes:MyRoutes, location:location }, function(error, redirectLocation, renderProps) {
		console.log(renderProps	);
		ReactDOM.render(
			<Router routes={MyRoutes} history={History} />,
			document.getElementById('app')
		)
	})
}
