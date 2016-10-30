const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
	var React = require( 'react' );
	var ReactRouter = require('react-router');
}
else
{
	var React = window.React;
	var ReactRouter = window.ReactRouter;
}

var Route = ReactRouter.Route;
var Link  = ReactRouter.Link;

const Home = React.createClass( {
	  render : function() {
			return (
			  <div>
				<h1>Home</h1>
				<ul>
				  <li><Link to="/Test">Test</Link></li>
				</ul>
			  </div>
			)
		}
} );

exports.Home = Home