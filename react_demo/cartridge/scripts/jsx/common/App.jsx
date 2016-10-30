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

exports.App = App